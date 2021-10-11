import express from 'express';
import { postLogin, postSignup } from '../controllers/auth.js';


const router = express.Router();

router.post('/login', postLogin);
router.post('/signup', postSignup);

export default router;
