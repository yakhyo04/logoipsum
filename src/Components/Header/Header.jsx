import React, {useState} from 'react';
import './Header.css';
import logoipsum from '../image/logoipsum.svg';

function Header() {
    const [toggleBtn, setToggleBtn] = useState(false)
    return (
        <header className="header">
            <div className="container">
            <ul>
                <li>
                <img src={logoipsum} alt="" />
                <button class="nav-toggle" onClick={()=> setToggleBtn(!toggleBtn)}>
            <i class="fas fa-bars"></i>
          </button>
                </li>
                {toggleBtn ?
                <ul className="toggle__list">
                    <li className="toggle__item"><a href="#">Home</a></li>
                    <li className="toggle__item"><a href="#">Features</a></li>
                    <li className="toggle__item"><a href="#">Pricing</a></li>
                    <li className="toggle__item"><a href="#">Blog</a></li>
                    <li><a src="#" className="header__link">Get Started</a></li>
                </ul>
                : null 
            }
            <li className="links">
                    <ul className="header__list">
                        <li className="header__item"><a href="#">Home</a></li>
                        <li className="header__item"><a href="#">Features</a></li>
                        <li className="header__item"><a href="#">Pricing</a></li>
                        <li className="header__item"><a href="#">Blog</a></li>
                    </ul>
                </li>
                <li className="links"><a href="#" className="header__link">Get Started</a></li> 
            </ul>
            </div>
        </header>
    );
  }

export default Header;