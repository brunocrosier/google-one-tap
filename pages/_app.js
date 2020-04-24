import React, { useState, useEffect } from "react"
import { firebaseAuth, db } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { DefaultSeo } from "next-seo"

export const GlobalContext = React.createContext(null)

export default ({ Component, pageProps }) => {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [user, authLoading, authError] = useAuthState(firebaseAuth)

  useEffect(() => {
    authError && console.error("authError", authError)
  }, [authError])

  useEffect(() => {
    if (user && user.uid) {
      setLoggedInUser(user)
    } else {
      setLoggedInUser(null)
    }
  }, [user])

  return (
    <>
      <DefaultSeo
        title="Google One-Tap Login + Next.js + Firebase Auth"
        description="A little demo of how to implement Google One-Tap with Next.js & Firebase Auth - plus a fallback for devices that don't support it."
        openGraph={{
          url: "https://google-one-tap.now.sh",
          title: "Google One-Tap Login + Next.js + Firebase Auth",
          description:
            "A little demo of how to implement Google One-Tap with Next.js & Firebase Auth - plus a fallback for devices that don't support it.",
          images: [
            {
              url: "https://google-one-tap.now.sh/meta-banner.jpg",
              width: 1200,
              height: 628,
              alt: "meta banner",
            },
          ],
          site_name: "Google One-Tap Login - Demo",
        }}
        twitter={{
          handle: "@bruno_crosier",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <GlobalContext.Provider value={{ loggedInUser, authLoading }}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
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
            overflow-x: none;
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
            margin: 0px !important;
          }

          /* Set core body defaults */
          body {
            // min-height: 100vh;
            margin: 0px !important;
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
    </>
  )
}
