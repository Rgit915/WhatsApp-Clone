import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";

const ToggleColorMode = () => {
  //useColorMode hook from chakra-ui
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
     onClick={() =>toggleColorMode()}
     pos="absolute"
     top="0"
     right="0"
     m="1rem">
      {colorMode === 'dark' ? <SunIcon color="orange.200"/> : <MoonIcon color="blue.200"/>}
    </Button>


  );
};

export default ToggleColorMode;