import express from 'express';
import { postLogin, postSignup, postForgotPassword, getAllUsers, getUserByUserName } from '../controllers/auth.js';


const router = express.Router();

router.post('/login', postLogin);
router.post('/signup', postSignup);
router.post('/forgotPassword', postForgotPassword);
router.get('/getAllUsers', getAllUsers)
router.get('/getUser/:userName', getUserByUserName)

export default router;
