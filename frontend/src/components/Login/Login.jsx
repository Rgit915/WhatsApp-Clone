import { FormControl, FormLabel, VStack, Input, Button, ButtonGroup, FormErrorMessage } from '@chakra-ui/react';
import React from 'react';

const Login = () => {
  return <VStack as="form"  w={{ base: "90%", md: "500px" }} justify="center" m="auto" h="100vh">
    <FormControl>
      <FormLabel >Username</FormLabel>
      <Input name="username" placeholder="Enter Username" autoComplete="off" />
      <FormErrorMessage>Invalid Username</FormErrorMessage>
    </FormControl>

    <FormControl>
      <FormLabel >Password</FormLabel>
      <Input name="password" placeholder="Enter Password" type="password" autoComplete="off"/>
      <FormErrorMessage>Invalid password</FormErrorMessage>
    </FormControl>
<ButtonGroup>
   <Button  type="submit">Log in</Button>
   <Button>Create Account</Button>
</ButtonGroup>

  </VStack>;

};

export default Login;
