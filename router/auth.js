
import express from 'express';
import { register } from '../controller/register.js';
import { authM } from '../middleware/auth.js';

const auth = express.Router();
auth.post('/creatUser',authM,register)


export default auth;