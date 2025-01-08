import { Link } from "react-router-dom"

//Images
import Logo from '../../imgs/logo.png'
import Insta from '../../imgs/insta.png'
import Face from '../../imgs/face.png'

//Assets
import './Footer.css'

function Footer () {
    return (
      <footer>
        <div className="container" style={{ paddingTop: '25px' }}>
          <div className="d-flex jc-space-between mobile-fd-column">
            <div className="footer-logo-col">
              <img src={Logo} alt="" srcset="" className="footer-logo" />
              <p className="grey-1-color">
                blablablabalabalabakbakbkbakbak <br />
                bbakbakbkabkabkbakabkbakbakabkabkba
              </p>
              <div className="d-flex socil-link">
                <a
                  href="https://www.instagram.com/liliarolimnutri/?igsh=MXE3Nnc1M200a3BtbQ%3D%3D"
                  target="_blank"
                >
                  <img src={Insta} alt="" srcset="" />
                </a>
                <a href="" target="_blank">
                  <img src={Face} alt="" srcset="" />
                </a>
              </div>
            </div>
            <div className="d-flex">
              <div className="footer-col">
                <h3>Contato</h3>
                <p className="grey-1-color">
                  R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP |
                  CEP 12243-030{" "}
                </p>
                <p className="grey-1-color">suporte@escoladnc.com.br</p>
                <p className="grey-1-color">(19) 99187-4342</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer