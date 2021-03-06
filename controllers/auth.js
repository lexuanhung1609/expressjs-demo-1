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
      message: 'Your account is not exist',
    });
  }

  res.status(200).json({
    message: 'You login successfully',
    body: match,
  });
};

const postSignup = (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const confirmPwd = req.body.confirmPassword;
  if (!userName || !password || !confirmPwd) {
    return res.status(400).json({
      message: 'Please fill the required field',
    });
  }

  if (password !== confirmPwd) {
    return res.status(400).json({
      message: 'Your confirm password and your password did not match',
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
    message: 'This username is exist. Please change the username',
    body: match,
  });
};

export { postLogin, postSignup };
