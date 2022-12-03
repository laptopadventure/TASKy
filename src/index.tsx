import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react'
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginProvider from './Auth/LoginContext';

function getEnvVar(variable: string|undefined, varName: string): string {
  if(!variable) {
    throw new Error(`missing env var "${varName}"`)
  }
  return variable
}

const domain = getEnvVar(process.env.REACT_APP_DOMAIN, "domain")
const clientId = getEnvVar(process.env.REACT_APP_CLIENT_ID, "client id")

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin} >
    <LoginProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </MantineProvider>
    </LoginProvider>
  </Auth0Provider>
);
