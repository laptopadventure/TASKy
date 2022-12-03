import { createContext } from "react";

type Crud = "create"|"read"|"update"|"delete"

export type ContextUser = {

  capability: Crud[] //implement fully next lab
}

export const UserContext = createContext<ContextUser>({
  capability: []
})
