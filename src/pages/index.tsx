// Import dependencies
import React from 'react';

// Import local dependencies
import { Container, Header, Main, Footer } from '@components';

/**
 * Create Home page
 */
const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>A next.js web-based manager for maven dependencies</Main>
      <Footer />
    </Container>
  );
};

/**
 * Export Home page
 *
 * @type {React.FC}
 */
export default Home;
