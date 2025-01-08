import { Link } from "react-router-dom"

//Images
import Logo from '../../imgs/logo.png'

//Assets
import './Header.css'

function Header () {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo}/></Link>
                    <nav>
                    <ul className="d-flex">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/cadastrar'>Cadastrar</Link></li>
                        <li><Link to='/consultar'>Consultar</Link></li>
                        
                    </ul>
                </nav>
                </div>                
            </div>
        </header>
    )
}

export default Header