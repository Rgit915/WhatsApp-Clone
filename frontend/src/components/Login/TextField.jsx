import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from "@chakra-ui/input"
import { Field, useField } from "formik";
import React from 'react';

const TextField = ({ label, ...props }) => {
  // useField() is a hook provided by Formik to get values and callbacks for a field
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      {/* FormLabel displays the label for the input */}
      <FormLabel>{label}</FormLabel>

      {/* Input component from Chakra UI is used, and it's connected to Formik using the Field component */}
      <Input as={Field} {...field} {...props} />

      {/* FormErrorMessage displays the error message when the input is touched and has an error */}
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
