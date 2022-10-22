import './Header.css';
import React, { useContext } from 'react';
import { ContextStyle, StyleContext } from '../../context/StyleContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Header({setStyle}: {setStyle: (newStyle: ContextStyle) => void}) {
  const style = useContext(StyleContext)

  return (
    <div className="Header">
      <div>
        TASKy
      </div>
      <div className="style-icon">
        <FontAwesomeIcon
          icon={style ? faSun : faMoon}
          onClick={() => {
            setStyle({mode: style.mode === 'light' ? 'dark' : 'light'})
          }} />
      </div>
    </div>
  )
}
