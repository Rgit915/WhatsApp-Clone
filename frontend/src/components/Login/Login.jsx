import { FormControl, FormLabel, VStack, Input, Button, ButtonGroup, FormErrorMessage, Heading } from '@chakra-ui/react';
import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {

  const formik = useFormik({
    initialValues: { username: "", password: "" }, //Formik uses the name of the Input tp track its value
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username required!") //string that shows user error message when username not provided
        .min(6, "username too short!")
        .max(28, "Username too long"),
      password: Yup.string()
        .required("Password required!") //string that shows user error message when password not provided
        .min(6, "Password too short!")
        .max(28, "Password too long")
    })
  });
  return <VStack as="form" w={{ base: "90%", md: "500px" }} justify="center" m="auto" h="100vh" spacing="1rem">
    <Heading>Log In</Heading>
    <FormControl>
      <FormLabel fontSize="lg" >Username</FormLabel>
      <Input name="username" placeholder="Enter Username" autoComplete="off" size="lg" />
      <FormErrorMessage>Invalid Username</FormErrorMessage>
    </FormControl>

    <FormControl>
      <FormLabel fontSize="lg">Password</FormLabel>
      <Input name="password" placeholder="Enter Password" type="password" autoComplete="off" size="lg" />
      <FormErrorMessage>Invalid password</FormErrorMessage>
    </FormControl>
    <ButtonGroup pt="1rem">
      <Button type="submit" colorScheme="teal">Log in</Button>
      <Button>Create Account</Button>
    </ButtonGroup>

  </VStack>;

};

export default Login;
