import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from '../config/environment.js';
import { authMiddleware } from '../middleware/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: config.maxFileSize },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase().slice(1);
    if (config.allowedImageTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo não suportado'), false);
    }
  }
});

router.post('/', authMiddleware, upload.single('imagem'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Nenhuma imagem enviada' });
  }
  res.json({ success: true, imageUrl: `/uploads/${req.file.filename}` });
});

export default router;
