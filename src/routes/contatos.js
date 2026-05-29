import express from 'express';
import { createContato, getContatos, deleteContato } from '../controllers/contatoController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/', createContato);
router.get('/', authMiddleware, getContatos);
router.delete('/:id', authMiddleware, deleteContato);

export default router;
