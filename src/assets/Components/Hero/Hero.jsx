import './Hero.css'
import Button from "../Button/Button"
import { Link } from 'react-router-dom'

function Hero(props){
    return(
        <div className='hero d-flex al-center'>
           <div className='hero-text'>
            
                    <h1>Lília Rolim</h1>
                    <p>texto sobre a importancia da avaliação</p>
                    <Link to="/cadastrar">
                    <Button buttonStyle="outline"> 
                        Avaliar
                    </Button>
                    </Link>
           </div>
        </div>
    )
}

export default Hero