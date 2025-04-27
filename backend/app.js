import express from 'express';
import cors from 'cors';
import interviewRoutes from './routes/interviewRoutes.js';
import connectDB from './config/db.js';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/interview', interviewRoutes);

export default app;
