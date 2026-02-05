import React from 'react'

const Footer = () => {
return (
    <>
        <footer id="footer">
            <div className="footer__line"></div>
            <div className="footer__container">
                <div className="footer__row">
                    <h1 className="footer__title">
                        America's leading Movie Registry
                    </h1>
                    <div className="footer__links">
                        <ul className="footer__link--list">
                            <li className="link footer__link">Home</li>
                            <li className="link footer__link">Movie List</li>
                            <li className="link footer__link">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
         </footer>
    </>
)

}

export default Footer;