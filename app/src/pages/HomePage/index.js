import React from 'react';
import Article from 'grommet/components/Article';
import { SearchMoviesContainer } from 'containers';
import styled from 'styled-components';

const Body = styled(Article)`
  padding: 0px 50px;
`;

export default function HomePage() {
  return (
    <Body>
      <SearchMoviesContainer />
    </Body>
  );
}
