import express from 'express';
import connectDB from './dbConnection.js';


const app = express();
app.use(express.json());

connectDB();