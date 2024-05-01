const { check } = require("express-validator");

exports.contactValidator = [
  check("name").notEmpty().withMessage("Name field must not be empty"),
  check("email").isEmail().withMessage("Invalid email"),
  check("message").notEmpty().withMessage("Message field must not be empty"),
  
];

