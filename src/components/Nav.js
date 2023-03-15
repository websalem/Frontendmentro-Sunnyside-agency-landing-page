import logo from '../assets/images/logo.svg';
import mobileToggle from '../assets/images/icon-hamburger.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    const [state, setState] = useState(false);
    function showNav() {
        return setState(!state);
    }
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <nav>
                    <div className='mobile-toggle' onClick={showNav}>
                        <img src={mobileToggle} alt="mobile toggle icon" />
                    </div>
                    <ul className={state ? 'expanded' : ''}>
                        <li> <Link to='/about'>About</Link></li>
                        <li> <Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Nav;