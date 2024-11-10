import express from 'express';
import ViteExpress from 'vite-express';

import dotenv from 'dotenv';
import cors from 'cors';

import { excludeRoutes } from './utils/routes-excluder.js';
import { APIRouteNotFound } from './middlewares/route-not-found.js';
import testRouter from './api/router/test.routes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const DEPLOYMENT = process.env.VITE_API_URL;

// App Config
const app = express();
app.use(express.json()), app.use(cors());

// Routers
app.use('/api/test', testRouter);

// Routes Error Controller
app.use('/api', excludeRoutes(APIRouteNotFound, ['/test']));

// General Error Handler
app.use((err, req, res, next) => {
  return res.status(err.message || 500).json(err.message || 'Unexpected Error');
});

ViteExpress.listen(app, PORT, () => console.log(`Vite Full JS ➡ ${DEPLOYMENT}`));
