import { data } from '../shared/data.js';
import User from '../models/user.js';
import _ from 'lodash';

const postLogin = (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;
  if (!userName || !password) {
    return res.status(400).json({
      message: 'Please fill the required field',
    });
  }

  const user = new User(userName, password);

  const match = _.filter(
    data,
    (o) => o.userName === user.userName && o.password === user.password
  );

  if (!match.length) {
    return res.status(404).json({
      message: 'Your account does not exist',
    });
  }

  res.status(200).json({
    message: 'You have logged in successfully',
    body: match,
  });
};

const postSignup = (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const confirmPwd = req.body.confirmPassword;
  if (!userName || !password || !confirmPwd) {
    return res.status(400).json({
      message: 'Please fill in the required fields',
    });
  }

  if (password !== confirmPwd) {
    return res.status(400).json({
      message: 'Your confirmed password and your password do not match',
    });
  }

  const user = new User(userName, password);

  const match = _.filter(data, (o) => o.userName === user.userName);

  if (!match.length) {
    return res.status(200).json({
      message: 'Your account has been created successfully',
      body: user
    });
  }

  res.status(400).json({
    message: 'This username exists. Please change the username',
    body: match,
  });
};

const postForgotPassword = (req, res, next) => {
  const userName = req.body.userName;

  if (!userName) {
    return res.status(400).json({
      message: 'Please fill in the required fields',
    });
  }

  const user = new User(userName);

  const findUserName = _.filter(
    data,
    (o) => o.userName == user.userName
  );

  if (!findUserName.length) {
    return res.status(404).json({
      message: 'Your username does not exist'
    });
  }

  res.status(200).json({
    message: 'Your password:',
    body: findUserName[0].password,
  });``
};

const getAllUsers = (req, res, next) => {
  res.status(200).json({
    message: 'All users: ',
    body: _.map(data, 'userName'),
  });
}

const getUserByUserName = (req, res, next) => {
  const userName = req.params.userName;
  // console.log(userName);

  const user = new User(userName);

  const findUser = _.filter(
    data,
    (o) => o.userName === user.userName
  );

  if (!findUser.length) {
    return res.status(404).json({
      message: 'Your username does not exist',
    });
  }

  res.status(200).json({
    message: 'Your data: ',
    body: findUser,
  });
}

export { postLogin, postSignup, postForgotPassword, getAllUsers, getUserByUserName };
