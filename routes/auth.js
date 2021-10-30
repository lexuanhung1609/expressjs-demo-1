import express from 'express';
import { postLogin, getLogin,
postSignup, getSignup,
postNewUserDB, getNewUserDB,
postNewKeoBet, getNewKeoBet,
postNewTeam, getNewTeam,
postNewWallet, getNewWallet,
postNewTransactionHistory, getNewTransactionHistory } from '../controllers/auth.js';


const router = express.Router();

router.post('/login', postLogin);
router.get('/login', getLogin);

router.post('/signup', postSignup);
router.get('/signup', getSignup);

router.post('/newUserDB', postNewUserDB);
router.get('/newUserDB', getNewUserDB);

router.post('/newKeoBet', postNewKeoBet);
router.get('/newKeoBet', getNewKeoBet);

router.post('/newTeam', postNewTeam);
router.get('/newTeam', getNewTeam);

router.post('/newWallet', postNewWallet);
router.get('/newWallet', getNewWallet);

router.post('/newTransactionHistory', postNewTransactionHistory);
router.get('/newTransactionHistory', getNewTransactionHistory);


export default router;
