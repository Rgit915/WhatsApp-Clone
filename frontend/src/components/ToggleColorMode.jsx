import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";

const ToggleColorMode = () => {
  //useColorMode hook from chakra-ui
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={() =>toggleColorMode()}>
      {colorMode}
    </Button>


  );
};

export default ToggleColorMode;