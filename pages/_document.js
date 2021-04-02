/* eslint-disable react/no-danger */
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const googleAnalytic = ''

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/...your-font"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* pwa */}
          <link href="/static/icons/site.webmanifest" rel="manifest" />
          <link
            href="/static/icons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/icons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/icons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />

          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />

          {/* analytic */}
          {googleAnalytic && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytic}`}
              />
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${googleAnalytic}');`
                }}
              />
            </>
          )}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
