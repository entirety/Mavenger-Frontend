// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { GetServerSideProps } from 'next';

// Import local dependencies
import { Container, Header, Main, Footer } from '@components';
import { NEXT_URL } from '@config';

type Data = {
  message: string;
};

/**
 * Create Home page
 */
const HelloWorld: React.FC<Data> = ({ message }) => {
  return (
    <Container>
      <Header />
      <Main>{message}</Main>
      <Footer />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${NEXT_URL}/api/hello-world`);
  const data: Data = await res.json();

  return {
    props: data,
  };
};

HelloWorld.propTypes = {
  message: PropTypes.string.isRequired,
};

/**
 * Export Home page
 *
 * @type {React.FC}
 */
export default HelloWorld;
