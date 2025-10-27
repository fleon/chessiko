# Chessiko

A chess game platform with a monorepo structure.

## Project Structure

```
chessiko/
├── index.ts              # Reverse proxy server
├── packages/
│   ├── backend/         # API server (Express)
│   └── frontend/        # React frontend (Vite)
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Install root dependencies:

```bash
npm install
```

2. Install backend dependencies:

```bash
cd packages/backend
npm install
cd ../..
```

3. Install frontend dependencies:

```bash
cd packages/frontend
npm install
cd ../..
```

## Development

### Quick Start (Recommended)

Run all servers at once with a single command:

```bash
npm run dev
```

This will start all three servers concurrently:

- Backend (API server) on `http://localhost:3001`
- Frontend (Vite dev server) on `http://localhost:5173`
- Reverse proxy on `http://localhost:3000`

### Manual Start (Alternative)

You can also run servers individually in separate terminals:

1. **Start the backend server**:

```bash
npm run dev:backend
```

2. **Start the frontend server**:

```bash
npm run dev:frontend
```

3. **Start the reverse proxy**:

```bash
npm run dev:proxy
```

### Accessing the Application

Once all three servers are running, access the application at:

- **Main application**: http://localhost:3000
- Requests to `/api/*` are proxied to the backend (port 3001)
- All other requests are proxied to the frontend (port 5173)

## Architecture

The reverse proxy server (`index.ts`) routes:

- `/api/*` → Backend server (http://localhost:3001)
- `/*` → Frontend server (http://localhost:5173)

This setup provides:

- Single port access for the entire application
- Automatic request routing
- WebSocket support for Vite HMR (Hot Module Replacement)
- Simplified CORS handling

## Production

For production deployment:

1. Build the backend:

```bash
cd packages/backend
npm run build
npm start
```

2. Build the frontend:

```bash
cd packages/frontend
npm run build
npm run preview
```

3. Build and start the reverse proxy:

```bash
npm run build
npm start
```
