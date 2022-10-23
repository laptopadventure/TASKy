import {createContext } from "react";

export type ContextStyle = {
  mode: "light"|"dark"
}

export const StyleContext = createContext<ContextStyle>({
  mode: "dark"
})
