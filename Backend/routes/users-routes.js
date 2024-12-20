const express = require("express");
const { check } = require("express-validator");
const usersControllers = require("../Controllers/user-controllers");

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.post(
  "/signup",
  check("name").not().isEmpty(),
  check("password").isLength({ min: 6 }),
  check("email").normalizeEmail().isEmail(),
  usersControllers.signup
);

router.post("/login", usersControllers.login);

module.exports = router;
