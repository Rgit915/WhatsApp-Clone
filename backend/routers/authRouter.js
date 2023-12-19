const express = require('express');
const router = express.Router();
const Yup = require('yup');

//Creates a Yup object schema that defines the shape of the object to be validated
const formSchema = Yup.object({
  username: Yup.string()
    .required("Username required")
    .min(6, "Username too short")
    .max(28, "Username too long"),
  password: Yup.string()
    .required("Username required")
    .min(6, "Username too short")
    .max(28, "Username too long"),
});

module.exports = router;