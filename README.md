# SASUCRILHOS v2 🎬✨

**Estúdio de Dublagem Profissional no Discord**

Versão 2 completamente reformulada com arquitetura moderna, segurança aprimorada, performance otimizada e melhor escalabilidade.

## 🚀 Melhorias da v2

### ✨ Arquitetura
- ✅ Estrutura modular com separação de responsabilidades (MVC)
- ✅ Middleware customizado para segurança e logging
- ✅ Tratamento centralizado de erros
- ✅ Validação de dados com express-validator
- ✅ Padrão de services e controllers

### 🔒 Segurança
- ✅ Helmet.js para headers de segurança HTTP
- ✅ Rate limiting para prevenir abuso
- ✅ Validação e sanitização de inputs
- ✅ JWT para autenticação segura
- ✅ Bcrypt para hashing de senhas
- ✅ CORS configurável por ambiente
- ✅ Proteção contra SQL Injection
- ✅ Content Security Policy (CSP)

### ⚡ Performance
- ✅ Compressão de respostas
- ✅ Image optimization com Sharp
- ✅ Lazy loading de assets
- ✅ Cache headers otimizados
- ✅ Database query optimization

### 📝 Logging & Monitoramento
- ✅ Morgan para logs de requisições HTTP
- ✅ Sistema centralizado de logging
- ✅ Error tracking

### 🧪 Qualidade de Código
- ✅ ESLint para linting
- ✅ Prettier para formatação
- ✅ Jest para testes unitários

## 📁 Estrutura de Pastas

```
sasu-v2/
├── src/
│   ├── config/              # Configurações
│   ├── controllers/         # Lógica de negócio
│   ├── routes/              # Rotas da API
│   ├── middleware/          # Middlewares customizados
│   ├── database/            # Banco de dados
│   └── server.js            # Entrada principal
├── public/                  # Arquivos estáticos
├── tests/                   # Testes
└── package.json
```

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/Jones2451/sasu-v2.git
cd sasu-v2
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

4. Inicie o servidor
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

## 🚀 Uso

### Desenvolvimento
```bash
npm run dev      # Com hot reload
npm run start    # Produção
```

### Testes
```bash
npm test         # Executar testes
npm run test:watch  # Com watch
```

### Linting & Formatação
```bash
npm run lint     # ESLint
npm run format   # Prettier
```

## 📡 API Routes

### Autenticação
- `POST /api/auth/login` - Login (retorna JWT)

### Dubladores
- `GET /api/dubladores` - Listar todos
- `GET /api/dubladores/:id` - Detalhes
- `POST /api/dubladores` - Criar (protegido)
- `PUT /api/dubladores/:id` - Atualizar (protegido)
- `DELETE /api/dubladores/:id` - Deletar (protegido)

### Episódios
- `GET /api/episodios` - Listar todos
- `GET /api/episodios/:id` - Detalhes
- `POST /api/episodios` - Criar (protegido)
- `PUT /api/episodios/:id` - Atualizar (protegido)
- `DELETE /api/episodios/:id` - Deletar (protegido)

### Contatos
- `POST /api/contatos` - Enviar mensagem
- `GET /api/contatos` - Listar (protegido)
- `DELETE /api/contatos/:id` - Deletar (protegido)

### Upload
- `POST /api/upload` - Upload de imagem (protegido)

## 📄 Licença

MIT

## 👥 Autores

- **Skyzoe** - Developer Full-Stack
- **SASUCRILHOS Team** - Conteúdo e Conceito

---

**SASUCRILHOS v2 - Transformando animes em experiências épicas desde 2026.** 🎬✨
