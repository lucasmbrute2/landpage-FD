import "./Header.scss"
import image1 from "../../assets/logo-in8-dev.svg"

export function Header() {
  return (
    <div className="header">
      <div className="background-image"></div>
      <div className="header-container">
        <div className="header-container-logo">
          <img src={image1} alt='logo' className='logo' />
        </div>
        <div className="header-container-nav">
          <ul className="header-container-nav-ul">
            <li className='header-container-nav-li'>Cadastro</li>
            <li className="separator"></li>
            <li className='header-container-nav-li'>lista</li>
            <li className="separator"></li>
            <li className='header-container-nav-li'>Sobre mim</li>
          </ul>
        </div>
      </div>
      <div className="header-tittle">
        <h1 className='header-tittle-h1'>estágio</h1>
        <p className="header-tittle-caption">prova de seleção</p>
      </div>
    </div>
  )
}