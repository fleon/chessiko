# Chessiko Backend API

API server for Chessiko application built with Express 5.1.0 and TypeScript.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the server in development mode with hot reload:

```bash
npm run dev
```

The server will start on `http://localhost:3001`

### Production

Build the TypeScript code:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## API Endpoints

All routes are prefixed with `/api`

### Health Check

- **GET** `/api/health` - Returns "OK" if the server is running

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run type-check` - Check TypeScript types without emitting files
