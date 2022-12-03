import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { Button } from '@mantine/core';
import { LoginContext } from "./LoginContext";

export default function Login() {

  const {isAuthenticated, user, logout, loginWithRedirect} = useAuth0();

  const loginContext = useContext(LoginContext)

  function handleLogin() {
    loginWithRedirect()
  }

  function handleLogout() {
    loginContext.logout()
    logout({ returnTo: window.location.origin })
  }

  useEffect(() => {
    if(isAuthenticated && user) {
      loginContext.login(user)
    }
  }, [isAuthenticated, user, loginContext])

  return (
    <>
      {isAuthenticated ? (
        <Button size="xl" onClick={handleLogout}>
          Log Out
        </Button>
      ) : (
        <Button onClick={handleLogin}>Log In</Button>
      )}
    </>
  );
}
