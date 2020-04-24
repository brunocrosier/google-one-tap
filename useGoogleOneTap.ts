import { useState, useContext, useEffect } from "react"
import { GlobalContext } from "./pages/_app"
import { fb } from "./firebase"

declare var google: any

export const useGoogleOneTap = () => {
  const [id_token, setId_token] = useState(null)
  const [shouldShowFallbackButton, setShouldShowFallbackButton] = useState(
    false
  )

  const { loggedInUser, authLoading } = useContext(GlobalContext)

  useEffect(() => {
    console.log("authLoading", authLoading)
  }, [authLoading])

  useEffect(() => {
    if (!loggedInUser) {
      const handleCredentialResponse = (response) => {
        setId_token(response.credential)
      }

      const nativeCallback = (obj) => alert("native_callback!")

      const client_id =
        "812622916919-k75gcjkkqs04s57s5ks2f16q74qui6b2.apps.googleusercontent.com"

      google.accounts.id.initialize({
        client_id,
        callback: handleCredentialResponse,
        auto_select: true,
        context: "use",
        native_callback: nativeCallback,
        prompt_parent_id: 'put-google-one-tap-here-plz'
      })
      google.accounts.id.prompt((notification) => {
        console.log("notification is: ", notification.getMomentType())
        if (notification.isDisplayMoment()) {
          console.log("IS DISPLAY MOMENT")
        }

        if (notification.isNotDisplayed()) {
          console.warn(
            "one-tap did not show because:",
            notification.getNotDisplayedReason()
          )
          setShouldShowFallbackButton(true)
        }
        if (notification.isSkippedMoment()) {
          console.warn(
            "one-tap skipped because:",
            notification.getSkippedReason()
          )
          setShouldShowFallbackButton(true)
        }
        if (notification.isDismissedMoment()) {
          console.warn(
            "one-tap dismissed because:",
            notification.getDismissedReason()
          )
          setShouldShowFallbackButton(true)
        }
      })
    } else {
      google.accounts.id.cancel()
    }
  }, [loggedInUser])

  useEffect(() => {
    console.log(loggedInUser)
  }, [loggedInUser])

  useEffect(() => {
    if (id_token) {
      // Sign in with credential from the Google user.
      fb.auth()
        .signInWithCredential(fb.auth.GoogleAuthProvider.credential(id_token))
        .catch(function (error) {
          console.error("bruno says", error)
        })
    }
  }, [id_token])

  return {
    shouldShowFallbackButton,
    setShouldShowFallbackButton,
    loggedInUser,
    authLoading
  }
}
