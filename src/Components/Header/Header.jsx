import './Header.css';
import logoipsum from '../image/logoipsum.svg';

function Header() {
        const links = document.querySelector(".links");
    return (
        <header className="header">
            <div className="container">
            <ul>
                <li>
                <img src={logoipsum} alt="" />
                <button class="nav-toggle" onClick={()=>links.classList.toggle("show-links")}>
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