import './Header.css';
import React, { useContext } from 'react';
import { ContextStyle, StyleContext } from '../../context/StyleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

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
    </div>
  )
}
