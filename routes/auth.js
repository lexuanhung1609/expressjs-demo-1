import express from 'express';
import { postLogin, postSignup, postForgotPassword, postGetAllUSer, getUserByUserName } from '../controllers/auth.js';


const router = express.Router();

router.post('/login', postLogin);
router.post('/signup', postSignup);
router.post('/forgotpassword', postForgotPassword);
router.post('/getalluser', postGetAllUSer);
router.get('/getuserbyusername/:userName', getUserByUserName);

export default router;
