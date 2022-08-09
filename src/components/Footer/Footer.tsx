import { useContext } from "react"
import { Context, UserContexType } from "../../context"
import "./Footer.scss"

export function Footer() {

  const { users } = useContext(Context) as UserContexType;

  return (
    <div className="footer">
      <div className="footer-content">
        <p>{users[0]?.name}</p>
        <p>{users[0]?.email}</p>
        <p>{users[0]?.phone}</p>
        <p>Faculdade de Belo Horizonte</p>
      </div>
    </div>
  )
}