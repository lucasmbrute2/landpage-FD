import { createContext, useEffect, useState } from "react"
import { api } from "../api/api";
import { IRequest } from "../App";

export type UserContexType = {
  users: IRequest[],
}

export const Context = createContext<UserContexType | null>(null);

export function CtxApp({ children }: any) {
  const [users, setUsers] = useState<IRequest[]>([]);

  useEffect(() => {
    api.getAll("/user")
      .then((res) => res.json())
      .then((data) => setUsers(data))

  }, [])

  return (
    <Context.Provider value={{ users }}>
      {children}
    </Context.Provider>
  )
}
