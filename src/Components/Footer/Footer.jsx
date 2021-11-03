import './Footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <ul className="footer__list">
                    <li>
                        <h1 className="footer__heading">Get the right plan for future product.</h1>
                    </li>
                    <li>
                        <div className="footer__div">
                            <b className="yearly">Yearly </b><b className="monthly">Monthly</b>
                        </div>
                    </li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__box">
                       <p>Starter</p>
                       <h3 className="footer__text">Free</h3>
                       <p>1 Website</p>
                       <p>5 GB Hosting</p>
                       <p>Limited Support</p>
                       <a href="#" className="footer__box-btn">Get Started</a> 
                    </li>
                    <li className="footer__box--item">
                        <p>Premium</p>
                        <h3 className="footer__text">$29/month</h3>
                        <p>10 Website</p>
                        <p>15 GB Hosting</p>
                        <p>Premium Support</p>
                        <a href="#" className="footer__btn">Get Started</a>
                    </li>
                    <li className="footer__box">
                        <p>Enterprise</p>
                        <h3 className="footer__text">$49/month</h3>
                        <p>Unlimited Website</p>
                        <p>50 GB Hosting</p>
                        <p>Premium Support</p>
                        <a href="#" className="footer__box-btn">Get Started</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;