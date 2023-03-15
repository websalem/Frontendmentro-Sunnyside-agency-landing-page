import logoFooter from '../assets/images/logo-footer.svg';
function Footer() {
    return (
        <footer>
            <div className="logo">
                <img src={logoFooter} alt="logo" />
            </div>
            <div className='footer-nav'>
                <nav>
                    <ul>
                        <li>
                            About
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Projects
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='socials'>
                <div className='facebook'></div>
                <div className='instagram'></div>
                <div className='twitter'></div>
                <div className='pinterest'></div>
            </div>
        </footer>
    )
}
export default Footer;