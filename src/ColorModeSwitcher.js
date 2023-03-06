import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={"4"}
      right={"4"}
      fontSize={"24"}
      zIndex={'overlay'}
      colorScheme={'purple'}
      onClick={toggleColorMode}
      opacity={'0.8'}
      icon={<SwitchIcon color={'#B794F4'} />}
      {...props}
    />
  );
};


export default ColorModeSwitcher;
