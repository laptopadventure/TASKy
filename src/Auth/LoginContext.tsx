import { User } from "@auth0/auth0-spa-js";
import React, { PropsWithChildren, useEffect, useState } from "react";
import jwt from 'jsonwebtoken'
import cookies from 'react-cookies'

type LoginContextType = {
  user?: any
  token?: string
  loggedIn: boolean
  login: (user: User) => void
  logout: () => void
}

export const LoginContext = React.createContext<LoginContextType>({
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

export default function LoginProvider(props: PropsWithChildren) {
  
  const [loginState, setLoginState] = useState<LoginContextType>({
  loggedIn: false,
  login: () => {},
  logout: () => {},
})

  function validateToken(rawToken: string) {
    let token = rawToken.split(' ')[1];
    let foundUser
    jwt.verify(token, process.env.REACT_APP_SECRET!, {}, (_error, user) => {      
      foundUser = user
    });
    return [token, foundUser]
  }

  useEffect(() => {
    async function login(user: User) {
      try {
        const body = { fName: user.given_name, lName: user.family_name, email: user.email }
        const data: RequestInit = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
        const url = `${process.env.REACT_APP_BACKEND}/signup`
        const res = await fetch(url, data)
        const resBody = await res.json()
        console.log(resBody)
        //decode token
        const [tokenUser, token] = validateToken(resBody)
        //put user into state
        setLoginState({
          login,
          logout,
          loggedIn: true,
          user: tokenUser,
          token: token!,
        })
        //save into cookies
        cookies.save("auth", token!, {})
      } catch (e) {
        console.log("Error on login!")
      }
    }
    function logout(): void {
      setLoginState({
        loggedIn: false,
        user: undefined,
        token: undefined,
        login,
        logout,
      })
      cookies.remove("auth")
    }
    setLoginState(l => {
      return {loggedIn: true, login, logout}
    })
  }, [])

  return (
    <LoginContext.Provider value={loginState} >
      {props.children}
    </LoginContext.Provider>
  )
}
