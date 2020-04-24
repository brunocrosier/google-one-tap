import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#121212" />
          <meta name="msapplication-navbutton-color" content="#121212" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#121212"
          />

          <link rel="manifest" href="/manifest.webmanifest" />

          <link
            href="https://fonts.googleapis.com/css2?family=Google+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <style jsx global>
            {`
              html,
              body,
              body > div:first-child,
              div#__next,
              div#__next > div,
              div#__next > div > div {
                height: 100%;
              }

              html {
                background: #eaeaea;
              }

              /* Box sizing rules */
              *,
              *::before,
              *::after {
                box-sizing: border-box;
              }

              /* Remove default padding */
              ul[class],
              ol[class] {
                padding: 0;
              }

              /* Remove default margin */
              body,
              h1,
              h2,
              h3,
              h4,
              p,
              ul[class],
              ol[class],
              li,
              figure,
              figcaption,
              blockquote,
              dl,
              dd {
                margin: 0;
              }

              /* Set core body defaults */
              body {
                // min-height: 100vh;
                display: flex;
                justify-content: center;
                scroll-behavior: smooth;
                text-rendering: optimizeSpeed;
                line-height: 1.5;
              }

              /* Remove list styles on ul, ol elements with a class attribute */
              ul[class],
              ol[class] {
                list-style: none;
              }

              /* A elements that don't have a class get default styles */
              a:not([class]) {
                text-decoration-skip-ink: auto;
              }

              /* Make images easier to work with */
              img {
                max-width: 100%;
                display: block;
              }

              /* Natural flow and rhythm in articles by default */
              article > * + * {
                margin-top: 1em;
              }

              /* Inherit fonts for inputs and buttons */
              input,
              button,
              textarea,
              select {
                font: inherit;
              }

              /* Remove all animations and transitions for people that prefer not to see them */
              @media (prefers-reduced-motion: reduce) {
                * {
                  animation-duration: 0.01ms !important;
                  animation-iteration-count: 1 !important;
                  transition-duration: 0.01ms !important;
                  scroll-behavior: auto !important;
                }
              }
            `}
          </style>
        </body>
      </html>
    )
  }
}
