import express from 'express';
import { postLogin, postSignup, postForgotPassword, postGetAllUsers, getUserByUserName } from '../controllers/auth.js';


const router = express.Router();

router.post('/login', postLogin);
router.post('/signup', postSignup);
router.post('/forgotpassword', postForgotPassword);
router.post('/getallusers', postGetAllUsers);
router.get('/getbyusername/:userName', getUserByUserName);


export default router;

