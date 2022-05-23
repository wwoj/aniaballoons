import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import "../Styles/footer.scss";




const Footer = (props) => {
    return (
        <footer className="box two good">
            <ul className="inner-footer">
              
                <li>
                    <ul>
                        <li className="column-head">{props.t("footer_Contact")}</li>
                        <li><a href="mailto:azygmunt@att.net">azygmunt@att.net</a></li>
                        <li> <a href='tel:+1(630)-290-8175'>+1(630)-290-8175</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="column-head">{props.t("footer_Media")}</li>
                        <li><span><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagramSquare} size="2x" /></a></span>
                            <span><a href='https://www.facebook.com>'><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a></span>
                            <span><a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutubeSquare} size="2x" /></a></span></li>

                    </ul>
                </li>
            </ul>
            <div className='ds-flex-end align-center footer-creator'>
                <span>Created by wojcik.wojciechp@gmail.com</span>
            </div>
        </footer>

    );
}
export default Footer;