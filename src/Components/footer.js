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
                        <li>Pytania i odpowiedzi</li>
                        <li>Regulamin</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="column-head">O nas</li>
                        <li>Kontakt</li>
                        <li>Informacja o firmie</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="column-head">Social media</li>
                        <li><span><FontAwesomeIcon icon={faInstagramSquare} size="2x" /></span>
                            <span><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></span>
                            <span><FontAwesomeIcon icon={faYoutubeSquare} size="2x" /></span></li>

                    </ul>
                </li>
            </ul>
        </footer>

    );
}
export default Footer;