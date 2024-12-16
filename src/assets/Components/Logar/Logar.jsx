import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react"
import "./Logar.css"


function Logar () {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmmit = (event) => {
        event.preventDefault()
        
    }
  return (
    <div className="container-login">
        <form onSubmit={handleSubmmit}>
            <h1>Acesse o Sistema</h1>
            <div className="input-field-login">
            <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} />
            <FaUser className="icon" />
            </div>
            <div className="input-field-login">
            <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
            </div>
            <div className="recall-forget">
                <label>
                <input type="checkbox" name="" id="" />
                    Lembre de mim
                </label>
                <a href="#">Esqueci a senha!</a>
            </div>
            <button>Entrar</button>
            <div className="signup-link">
                <p>
                    Não tenho cadastro. <a href="#">Cadastrar</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Logar