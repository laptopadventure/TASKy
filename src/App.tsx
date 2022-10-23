import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { ContextStyle, StyleContext } from './context/StyleContext';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { MantineProvider } from '@mantine/core';

function App() {
  const [style, setStyle] = useState<ContextStyle>({mode: "dark"})

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <StyleContext.Provider value={style}>
        <div className={`App ${style.mode}`}>
          <Header setStyle={setStyle}/>
          <Main/>
          <Footer/>
        </div>
      </StyleContext.Provider>
    </MantineProvider>
  );
}

export default App;
