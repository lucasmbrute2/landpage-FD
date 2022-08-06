import { api } from "../../api/api"
import "./Registration.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Registration() {

  async function handleSubmit(e: any) {
    e.preventDefault()
    const name = e.target?.name?.value
    const email = e.target?.email?.value
    const birthday = e.target?.birthday?.value
    const phone = e.target?.phone?.value

    const response = await api.create("/user", {
      name,
      email,
      birthday,
      phone
    })

    if (response.status !== 201) {
      const data = await response.json()
      return toast.error(data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    toast.success("User created!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  }

  return (
    <div className="registration">
      <form className="registration-form" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="registration-form-h2">cadastro</h2>
        <div className="registration-form-container">
          <div className="registration-form-container-div">
            <label htmlFor="name">Nome</label>
            <input type="text" className="register-input" name='name' />
          </div>
          <div className="registration-form-container-div">
            <label htmlFor="email">Email</label>
            <input type="text" className="register-input" name='email' />
          </div>
          <div className="registration-form-container-div">
            <label htmlFor="birthday">Nascimento</label>
            <input type="text" className="register-input" name='birthday' />
          </div>
          <div className="registration-form-container-div">
            <label htmlFor="phone">Telefone</label>
            <input type="text" className="register-input" name='phone' />
          </div>
        </div>

        <button className="registration-form-button" type="submit">cadastrar</button>
        <ToastContainer />
      </form>
    </div>
  )
}