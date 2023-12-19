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

// create a route for /login
router.post("/login", (req, res) => {
  const formData = req.body;

  // Validate the form data using Yup schema
  formSchema
    .validate(formData)
    .catch(err => {
      // Log validation errors to the console
      console.log(err.errors);
    })
    .then(valid => {
      if (valid) {
        // The form is valid, handle the login logic here
        console.log("Form is valid!");

      }
    });
});


module.exports = router;