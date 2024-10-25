const { v4: uuid } = require("uuid");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const DUMMY_USERS = [
  {
    id: "u1",
    name: "M.Haidar Aziz",
    email: "haideraziz428@gmail.com",
    password: "1234567",
  },
];
const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};
const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed,please check your data.", 422);
  }
  const { name, email, password } = req.body;
  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };
  DUMMY_USERS.push(createdUser);
  res.json({ message: "Signed In" });
};
const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser) {
    throw new HttpError(
      "Could not identify user, credentials seem to be wrong.",
      401
    );
  }
  res.json({ message: "Logged In" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
