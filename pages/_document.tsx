import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Proza+Libre&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Quattrocento&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Lustria&display=swap" rel="stylesheet"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
