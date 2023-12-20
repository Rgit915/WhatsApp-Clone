
const validateForm = (req, res) =>{
  const formData = req.body;

  // Validate the form data using Yup schema
  formSchema
    .validate(formData)
    .catch(err => {
      // Log validation errors to the console
      console.log(err.errors);

      // Handle validation errors (send an error response to the client)
      res.status(422).json({ errors: err.errors });
    })
    .then(valid => {
      if (valid) {
        // The form is valid, handle the login logic here
        console.log("Form is valid!");

        res.status(200).json({ message: "Login successful" });
      }
    });
};

module.exports = validateForm;