import express from 'express';
import { postLogin, postSignup, forgotPassword, getAllUser,getUserByUserName} from '../controllers/auth.js';


const router = express.Router();

router.post('/login', postLogin);
router.post('/signup', postSignup);
router.post('/forgotPassword', forgotPassword)
router.post('/getAllUsers', getAllUser)
router.post('/getUserByUserName', getUserByUserName)
export default router;
