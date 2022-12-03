import './Header.css';
import { useContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { ContextStyle, StyleContext } from '../../context/StyleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import Login from '../../Auth/Login';
import { LoginContext } from '../../Auth/LoginContext';

type HeaderProps = {
  setStyle: (newStyle: ContextStyle) => void
}

export default function Header({setStyle}: HeaderProps) {
  const style = useContext(StyleContext)

  return (
    <div className="Header">
      <div>
        TASKy
      </div>
      <div style={{flexGrow: 2}} />
      <div
        onClick={() => {
          setStyle({mode: style.mode === 'light' ? 'dark' : 'light'})
        }}
        onKeyDown={(event) => {
          if(event.key === "Enter") {
            setStyle({mode: style.mode === 'light' ? 'dark' : 'light'})
          }
        }}
        tabIndex={0}
        className="style-icon">
        <FontAwesomeIcon
          icon={style.mode === "light" ? faSun : faMoon} />
      </div>
      <Profile />
    </div>
  )
}

function Profile() {
  const { isLoading } = useAuth0();

  const loginContext = useContext(LoginContext)

  if(isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <>
      {loginContext.user ? (
        <div>
          Hi, {"you exist hun"}!
        </div>
      ) : (
        <div>
          Welcome, Visitor!
        </div>
      )}
      <div>
        <Login />
      </div>
    </>
  )
}
