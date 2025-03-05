import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
