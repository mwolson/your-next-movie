import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';

function AppHeader() {
  return (
    <Box align="center">
      <Header>
        <Heading tag="h3" uppercase>Your Next Movie</Heading>
      </Header>
    </Box>
  );
}


export default AppHeader;
