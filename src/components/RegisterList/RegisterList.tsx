import { useContext } from "react"
import { Context, UserContexType } from "../../context"
import "./RegisterList.scss"

export function RegisterList() {

  const { users } = useContext(Context) as UserContexType

  return (
    <div className="registerList">
      <h2 className="registerList-h2">lista de cadastro</h2>
      <table className="registerList-table">
        <thead>
          <tr className="registerList-table-tr">
            <th className="registerList-table-th first-row"></th>
            <th className="registerList-table-th">nome</th>
            <th className="registerList-table-th">e-mail</th>
            <th className="registerList-table-th">nascimento</th>
            <th className="registerList-table-th">telefone</th>
          </tr>
        </thead>
        {users.map((user, i) => (
          <tbody>
            <tr key={i} className="registerList-table-tr">
              <td className="registerList-table-td first-column">{i + 1}</td>
              <td className="registerList-table-td">{user.name}</td>
              <td className="registerList-table-td">{user.email}</td>
              <td className="registerList-table-td">{user.birthday}</td>
              <td className="registerList-table-td">{user.phone}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div >
  )
}