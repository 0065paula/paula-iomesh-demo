import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { IS_USE_COOKIE_KEY } from "../components/cookies";

const GA_MEASUREMENT_ID = "G-VLRD9FE1LH";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            const isUseCookie =
              typeof window !== "undefined"
                ? window.localStorage.getItem('${IS_USE_COOKIE_KEY}')
                : null;
            const consent = isUseCookie === "true" ? "granted" : "denied";

            gtag('consent', 'default', {
              'ad_storage': consent,
              'analytics_storage': consent
            });

            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
        `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
