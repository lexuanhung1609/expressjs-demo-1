import { data } from '../shared/data.js';
import User from '../models/user.js';
import _ from 'lodash';
import { UserDB, KeoBet, Team, Wallet, TransactionHistory } from '../models/models_dbCollections.js';


const getNewUserDB = (req, res, next) => {
  res.render('newUserDB');
}

const postNewUserDB = (req, res, next) => {
  const newUserDB = new UserDB(req.body);
  newUserDB.save();
  return res.status(200).json({
    message: 'Check your MongoDB, collection name: users',
  });
}

const getNewKeoBet = (req, res, next) => {
  res.render('newKeoBet');
}

const postNewKeoBet = (req, res, next) => {
  const newKeoBet = new KeoBet(req.body);
  newKeoBet.save();
  return res.status(200).json({
    message: 'Check your MongoDB, collection name: keobets',
  });
}

const getNewTeam = (req, res, next) => {
  res.render('newTeam');
}

const postNewTeam = (req, res, next) => {
  const newTeam = new Team(req.body);
  newTeam.save();
  return res.status(200).json({
    message: 'Check your MongoDB, collection name: teams',
  });
}

const getNewWallet = (req, res, next) => {
  res.render('newWallet');
}

const postNewWallet = (req, res, next) => {
  const newWallet = new Wallet(req.body);
  newWallet.save();
  return res.status(200).json({
    message: 'Check your MongoDB, collection name: wallets',
  });
}

const getNewTransactionHistory = (req, res, next) => {
  res.render('newTransactionHistory');
}

const postNewTransactionHistory = (req, res, next) => {
  const newTransactionHistory = new TransactionHistory(req.body);
  newTransactionHistory.save();
  return res.status(200).json({
    message: 'Check your MongoDB, collection name: transactionhistories',
  });
}


const getLogin = (req, res, next) => {
  res.render('login');
}

const postLogin = (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;
  if (!userName || !password) {
    // return res.status(400).json({
    //   message: 'Please fill the required field',
    // });
    return res.render('login', {
      errorMessage: 'Please fill the required field'
    })
  }

  const user = new User(userName, password);

  const match = _.filter(
    data,
    (o) => o.userName === user.userName && o.password === user.password
  );

  if (!match.length) {
    // return res.status(404).json({
    //   message: 'Your account is not exist',
    // });
    return res.render('login', {
      errorMessage: 'Your username or password is incorrect'
    })
  }

  res.redirect('/');
  
};

const getSignup = (req, res, next) => {
  res.render('signup', {
    errorMessage: null
  });
}

const postSignup = (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const confirmPwd = req.body.confirmPassword;
  if (!userName || !password || !confirmPwd) {
    // return res.status(400).json({
    //   message: 'Please fill the required field',
    // });
    return res.render('signup', {
      errorMessage: 'Please fill the required field'
    })
  }

  if (password !== confirmPwd) {
    // return res.status(400).json({
    //   message: 'Your confirm password and your password did not match',
    // });
    return res.render('signup', {
      errorMessage: 'Your confirm password and your password did not match'
    })
  }

  const user = new User(userName, password);

  const match = _.filter(data, (o) => o.userName === user.userName);

  if (!match.length) {
    // return res.status(200).json({
    //   message: 'Your account has been created successfully',
    //   body: user
    // });
    return res.redirect('/login');
  }

  // res.status(400).json({
  //   message: 'This username is exist. Please change the username',
  //   body: match,
  // });
  res.render('signup', {
    errorMessage: 'This username is exist. Please change the username'
  })
  
};

export { postLogin, getLogin,
  postSignup, getSignup,
  postNewUserDB, getNewUserDB,
  postNewKeoBet, getNewKeoBet,
  postNewTeam, getNewTeam,
  postNewWallet, getNewWallet,
  postNewTransactionHistory, getNewTransactionHistory };
