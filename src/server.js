import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import { config } from './config/environment.js';
import { initDatabase } from './database/init.js';
import { errorHandler } from './middleware/errorHandler.js';
import { loggerMiddleware } from './middleware/logger.js';
import routes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ==================== SECURITY MIDDLEWARE ====================
app.use(helmet());
app.use(cors({
  origin: config.corsOrigin,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ==================== COMPRESSION ====================
app.use(compression());

// ==================== LOGGING ====================
app.use(morgan('combined', { stream: { write: (message) => console.log(message.trim()) } }));
app.use(loggerMiddleware);

// ==================== BODY PARSING ====================
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ==================== STATIC FILES ====================
app.use(express.static(path.join(__dirname, '../public')));
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// ==================== HEALTH CHECK ====================
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ==================== API ROUTES ====================
app.use('/api', routes);

// ==================== SERVE INDEX ====================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin.html'));
});

// ==================== 404 HANDLER ====================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Rota não encontrada',
    path: req.path
  });
});

// ==================== ERROR HANDLER ====================
app.use(errorHandler);

// ==================== DATABASE INITIALIZATION ====================
initDatabase();

// ==================== START SERVER ====================
app.listen(config.port, () => {
  console.log(`\n🚀 Servidor SASUCRILHOS v2 rodando em http://localhost:${config.port}`);
  console.log(`📁 Ambiente: ${config.nodeEnv}`);
  console.log(`🔒 CORS habilitado para: ${config.corsOrigin}`);
  console.log(`\n✅ Sistema pronto para uso!\n`);
});

export default app;
