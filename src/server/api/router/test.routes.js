import express from 'express';
import { sayPong } from '../controllers/test.controller.js';

const testRouter = express.Router();

testRouter.get('/ping', sayPong);

export default testRouter;
