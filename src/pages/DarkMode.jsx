import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </Box>
  );
};

export default DarkMode;