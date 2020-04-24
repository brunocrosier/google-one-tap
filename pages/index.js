import Head from "next/head"
import { fb, googleProvider } from "../firebase"
import { useGoogleOneTap } from "../useGoogleOneTap.ts"

export default function Home() {
  const {
    shouldShowFallbackButton,
    setShouldShowFallbackButton,
    loggedInUser,
    authLoading,
  } = useGoogleOneTap()

  return (
    <div
      css={css`
        background: #fff;
        display: grid;
        grid-auto-rows: min-content;
        gap: 1rem;
        width: 100vw;
        @media all and (orientation: landscape), (min-width: 768px) {
          max-width: 1040px;
        }
        padding: 10vw;
        * {
          font-family: Google Sans;
        }
        button {
          width: max-content;
          background: #1a73e8;
          border: none;
          box-shadow: 2px 2px 4px #0000002e;
          border-radius: 4px;
          padding: 0.2rem 2rem;
          color: white;
          min-height: 40px;
          font-size: 14px;
        }
      `}
    >
      <Head>
        <script src="https://accounts.google.com/gsi/client" />
        <script async defer src="https://buttons.github.io/buttons.js" />
      </Head>

      <h1>Google One-Tap + Next.js + Firebase Auth</h1>

      <p>
        A little demo of how to implement Google One-Tap with Next.js & Firebase
        Auth - plus a fallback for devices that don't support it.
      </p>
      <p>
        Made by <a href="https://twitter.com/bruno_crosier">@bruno_crosier</a>
      </p>

      <a
        className="github-button"
        href="https://github.com/brunocrosier/google-one-tap"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star brunocrosier on GitHub"
      >
        Star
      </a>

      {shouldShowFallbackButton && !loggedInUser && !authLoading && (
        <>
          <h3>one-tap is not displayed, here is a fallback button:</h3>
          <button
            onClick={() =>
              fb
                .auth()
                .signInWithRedirect(googleProvider)
                .catch(function (error) {
                  console.error("bruno says", error)
                })
            }
          >
            Continue with Google
          </button>
        </>
      )}

      {loggedInUser && <h2>Wassup, {loggedInUser?.displayName} !</h2>}

      {authLoading && <h5>loading..</h5>}

      {loggedInUser && (
        <button
          disabled={authLoading}
          onClick={() => {
            fb.auth().signOut()
            google.accounts.id.disableAutoSelect()
            setShouldShowFallbackButton(false)
          }}
        >
          Log out & disable auto-login
        </button>
      )}

      {/* we can make One-Tap attach to a custom element - see 'prompt_parent_id' in useGoogleOneTap.ts */}
      <div
        id="put-google-one-tap-here-plz"
        css={css`
          justify-self: center;
        `}
      />
    </div>
  )
}
