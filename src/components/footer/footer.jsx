import React from 'react';
import "./footer.scss";


const Footer = () => {
    return (
        <>
            <footer className="footer-contain">
                <div className="footer-section-two">
                    <div className="footer-section-columns">
                        <span>Qualtiy</span>
                        <span>Help</span>
                        <span>Share</span>
                        <span>Carrers</span>
                    </div>
                    <div className="footer-section-columns">
                        <span>244-5333-7783</span>
                        <span>longpn.be@gmail.com</span>
                        {/* <span>press@learnself.com</span>
                        <span>contact@learnself.com</span> */}
                    </div>
                    <div className="footer-section-columns">
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer;