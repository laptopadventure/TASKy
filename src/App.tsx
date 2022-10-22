import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { ContextStyle, StyleContext } from './context/StyleContext';
import "@cloudscape-design/global-styles/index.css"
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  const [style, setStyle] = useState<ContextStyle>({mode: "dark"})

  return (
    <StyleContext.Provider value={style}>
      <div className={`App ${style.mode}`}>
        <Header setStyle={setStyle}/>
        <Main/>
        <Footer/>
      </div>
    </StyleContext.Provider>
  );
}

export default App;
