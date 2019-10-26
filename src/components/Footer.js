import React from 'react';
import Icon from './utilities/Icon';


const Footer = () => {
    return (
        <footer className="footer">

                <div className="footer__container">

                   <div className="footer__container--title">
                         <h4>
                            <span className="footer__container--title-span">The<br/>Hilgart</span>
                         </h4>
                   </div>

                   <nav className="footer__container--nav">
                        <ul className="footer__container--nav-list">
                            <li className="footer__container--nav-item">
                                <a href="http://localhost:3000/" 
                                   className="footer__container--nav-link">
                                       About
                                </a>
                            </li>
                            <li className="footer__container--nav-item">
                                <a href="http://localhost:3000/" 
                                   className="footer__container--nav-link">
                                       Services
                                </a>
                            </li>
                            <li className="footer__container--nav-item">
                                <a href="http://localhost:3000/" 
                                   className="footer__container--nav-link">
                                       Journal
                                </a>
                            </li>
                            <li className="footer__container--nav-item">
                                <a href="http://localhost:3000/" 
                                   className="footer__container--nav-link">
                                       Contacts
                                </a>
                            </li>
                        </ul>
                   </nav>

                </div> {/* footer__container */}

                <div className="footer__social">

                     <div className="footer__social-license">
                        <span className="footer__social-license-txt">
                          &#169; Copyright The Hilgart 2018
                        </span>
                     </div>

                     <div className="footer__social-nav">
                         <ul className="footer__social-nav-list">
                             <li className="footer__social-nav-item">
                                 <Icon id="footer_icon" name="icon-facebook"/>
                             </li>
                             <li className="footer__social-nav-item">
                                 <Icon id="footer_icon" name="icon-google-plus"/>
                             </li>
                             <li className="footer__social-nav-item">
                                 <Icon id="footer_icon" name="icon-instagram"/>
                             </li>
                             <li className="footer__social-nav-item">
                                 <Icon id="footer_icon" name="icon-twitter"/>
                             </li>
                             <li className="footer__social-nav-item">
                                 <Icon id="footer_icon" name="icon-youtube"/>
                             </li>
                             <li className="footer__social-nav-item">
                                 <Icon id="footer_icon" name="icon-pinterest"/>
                             </li>
                         </ul>
                     </div> {/* footer__social-nav */}

                </div> {/* footer__social */}

        </footer>
    );
};

export default Footer;