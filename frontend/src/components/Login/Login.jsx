import { VStack, Button, ButtonGroup, Heading } from '@chakra-ui/react';
import React from 'react';
import { Form, Formik } from "formik";
import TextField from './TextField';
import { useNavigate } from 'react-router-dom';
import {formSchema} from "@whatsapp-clone/common"

const Login = () => {

  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={formSchema}

      onSubmit={(values, actions) => {
        // Create a shallow copy of the 'values' object
        const vals = { ...values };

        // Reset the form using the 'resetForm' method from the 'actions' object
        actions.resetForm();

        // Perform a POST request
        fetch("http://localhost:4000/auth/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          // Send the JSON-serialized copy of the 'values' object in the request body
          body: JSON.stringify(vals),

        })
          .catch(err => {
            // If an error occurs, simply return and do nothing
            return;
          })
          .then(res => {

            // Check if the response is not OK or has a status code of 400 or higher
            if (!res || !res.ok || res.status >= 400) {
              return;
            }

            // Parse the response body as JSON and return the result
            return res.json();
          })
          // Handle the parsed JSON data
          .then(data => {
            // If there is no data, return and do nothing
            if (!data) return;

            console.log(data);
          });
      }}
    >
      {/* Formik wrapper for managing form state */}
      <VStack
        as={Form}  // Rendered as a form element
        w={{ base: '90%', md: '500px' }}
        justify="center"
        m="auto"
        h="100vh"
        spacing="1rem"
      >
        {/* Heading for the login form */}
        <Heading>Log In</Heading>

        {/* Custom TextField component for username input */}
        <TextField
          name="username"
          placeholder="Enter Username"
          autocomplete="off"
          label="Username"
        />

        {/* Custom TextField component for password input */}
        <TextField
          name="password"
          placeholder="Enter Password"
          autocomplete="off"
          label="Password"
          type="password"
        />

        {/* ButtonGroup containing Log in and Create Account buttons */}
        <ButtonGroup pt="1rem">
          <Button type="submit" colorScheme="teal">
            Log in
          </Button>
          <Button onClick={()=> navigate("/register")}>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Login;
