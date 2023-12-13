import { FormControl, FormLabel, VStack, Input, Button, ButtonGroup, FormErrorMessage, Heading } from '@chakra-ui/react';
import React from 'react';

const Login = () => {
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
