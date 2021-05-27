// Import dependencies
import React from 'react';

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

// Import local dependencies
import store from '@redux/store';

// Import styles
import '@styles/global.scss';
import 'tailwindcss/tailwind.css';

/**
 * Exports App view
 *
 * @param Component - the component to render
 * @param pageProps - the page's props
 *
 * @constructor
 */
function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
