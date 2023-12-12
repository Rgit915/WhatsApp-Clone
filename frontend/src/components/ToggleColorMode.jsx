import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";

const ToggleColorMode = () => {
  //useColorMode hook from chakra-ui
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={() =>toggleColorMode()}>
      {colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
    </Button>


  );
};

export default ToggleColorMode;