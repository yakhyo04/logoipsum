import './Main.css';
import Hero3D from '../image/Hero3D.png';
import logoipsu from '../image/logoipsu.svg';
import logoips from '../image/logoips.svg';
import logoip from '../image/logoip.svg';
import logoi from '../image/logoi.svg';
import logom from '../image/logom.svg';
import index from '../image/index.png';
import metrics from '../image/metrics.png';
import benchmarks from '../image/benchmarks.png';
import pricing from '../image/pricing.png';
import retention from '../image/retention.png';

function Main(){
    return(
        <main className='main'>
        <div className="container">
           <nav className='main__nav'>
               <div className='main__div'>
                   <h1 className='main__heading'>Grow your subscription business</h1>
                   <p className='main__text'>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                   <a href="#" className='main__link'>Get Started</a>
               </div> 
               <div className='main__img'>
                   <img className="main__img" src={Hero3D} alt="" />
               </div>
           </nav>
               <ul className="main__list">
                   <li><img src={logoipsu} alt="logoipsum" /></li>
                   <li><img src={logoips} alt="logoipsum" /></li>
                   <li><img src={logoip} alt="logoipsum" /></li>
                   <li><img src={logoi} alt="logoipsum" /></li>
                   <li><img src={logom} alt="logoipsum" /></li>
               </ul>
               <nav className="main__nav">
                   <div className='main__img'>
                       <img className="index" src={index} alt="index" />
                   </div>
                   <div className='main__div'>
                       <h2 className='main__heading'>Subscription index</h2>
                       <p className="main__text">A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                       <a href="#" className="learn">Learn more</a>
                   </div>
               </nav>
               <nav className="main__nav">
                   <div className="main__div">
                       <h2 className="main__heading">In-depth metrics</h2>
                       <p className="main__text">Accurate, real-time reporting at your fingertips. Getting data has never been easier.</p>
                       <a href="#" className="learn">Learn more</a>
                   </div>
                   <div className="main__img">
                       <img className="index" src={metrics} alt="" />
                   </div>
               </nav>
               <ul className="main__list">
                   <li className="main__item">
                       <img src={benchmarks} alt="benchmarks" />
                       <h4>Benchmarks</h4>
                       <p>See how you stack up against comparable companies in similar stages.</p>
                   </li>
                   <li className="main__item">
                       <img src={pricing} alt="pricing audit" />
                       <h4>Pricing Audit</h4>
                       <p>Benchmark the health of your monetization and pricing strategy.</p>
                   </li>
                   <li className="main__item">
                       <img src={retention} alt="Retention Audit" />
                       <h4>Retention Audit</h4>
                       <p>Audit where revenue leakage exists and where you can increase retention.</p>
                   </li>
               </ul>
        </div>
        </main>
    );
}

export default Main;