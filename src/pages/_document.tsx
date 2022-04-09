import Document from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {Provider as StyletronProvider} from 'styletron-react';
import {styletron} from '../styletron';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(
              <StyletronProvider value={styletron}>
                <App {...props} />
              </StyletronProvider>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
