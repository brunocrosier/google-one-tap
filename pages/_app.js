import React, { useState, useEffect } from "react"
import { firebaseAuth, db } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

export const GlobalContext = React.createContext(null)

export default ({ Component, pageProps }) => {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [user, authLoading, authError] = useAuthState(firebaseAuth)

  useEffect(() => {
    authError && console.error("authError", authError)
  }, [authError])

  useEffect(() => {
    console.log("user ==>", user)

    if (user && user.uid) {
      setLoggedInUser(user)
    }
  }, [user])

  useEffect(() => {
    if (user && user.uid) {
      return db
        .collection("Users")
        .doc(user.uid)
        .onSnapshot(function (doc) {
          if (user && user.uid) {
            setLoggedInUser({ ...doc.data(), ...user })
          }
        })
    } else {
      setLoggedInUser(null)
    }
  }, [user])

  useEffect(() => console.log("loggedInUser", "===>", loggedInUser), [
    loggedInUser,
  ])

  return (
    <>
      <GlobalContext.Provider value={{ loggedInUser, authLoading }}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}
