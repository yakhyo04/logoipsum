import './Header.css';
import logoipsum from '../image/logoipsum.svg';
import './Header.js';

function Header() {
    return (
        <header className="header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
            <div className="container">
            <ul>
                <li>
                <img src={logoipsum} alt="" />
                <button class="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
                </li>
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