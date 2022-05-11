import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import "../Styles/footer.scss";




const Footer = () => {
    return (
        <footer className="box two good">
            <ul className="inner-footer">
                <li>
                    <ul>
                        <li className="column-head">Pomoc</li>
                        <li>Polityka Cookies</li>
                        <li>Regulamin</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="column-head">Kontakt</li>
                        <li>aaaaa@gmail.com</li>
                        <li>019-0000-000</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="column-head">Social media</li>
                        <li><span><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagramSquare} size="2x" /></a></span>
                            <span><a href='https://www.facebook.com>'><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a></span>
                            <span><a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutubeSquare} size="2x" /></a></span></li>

                    </ul>
                </li>
            </ul>
        </footer>

    );
}
export default Footer;