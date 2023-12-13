import { FormControl, FormLabel, VStack, Input, Button, ButtonGroup, FormErrorMessage, Heading } from '@chakra-ui/react';
import React from 'react';
import {Form, Formik } from "formik";
import * as Yup from "yup";
const Login = () => {

   return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required!")
          .min(6, "username too short!")
          .max(28, "Username too long"),
        password: Yup.string()
          .required("Password required!")
          .min(6, "Password too short!")
          .max(28, "Password too long")
      })}

      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) =>(
        <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        justify="center"
        m="auto"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Log In</Heading>
        <FormControl isInvalid={formik.errors.username && formik.touched}>
          <FormLabel fontSize="lg" >Username</FormLabel>
          <Input
            name="username"
            placeholder="Enter Username"
            autoComplete="off"
            size="lg"
            {...formik.getFieldProps("username")}
          />
          <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.errors.password && formik.touched}>
          <FormLabel fontSize="lg">Password</FormLabel>
          <Input
            name="password"
            placeholder="Enter Password"
            type="password"
            autoComplete="off"
            size="lg"
            {...formik.getFieldProps("password")}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <ButtonGroup pt="1rem">
          <Button type="submit" colorScheme="teal">Log in</Button>
          <Button>Create Account</Button>
        </ButtonGroup>

      </VStack>
      )}

    </Formik>

  );

};

export default Login;
