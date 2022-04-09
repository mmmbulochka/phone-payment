import '../styles/globals.css';
import type {AppProps} from 'next/app';
import styled, {ThemeProvider} from 'styled-components';
import {BaseProvider, LightTheme} from 'baseui';
import {Provider as StyletronProvider} from 'styletron-react';
import {styletron} from '../styletron';

const theme = {};

const AppS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <ThemeProvider theme={theme}>
          <AppS>
            <Inner>
              <div>hello</div>
              {/*<Component {...pageProps} />*/}
            </Inner>
          </AppS>
        </ThemeProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
