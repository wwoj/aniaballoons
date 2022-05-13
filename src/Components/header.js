import React from 'react';
import Media from 'react-media';

import NavbarBig from './navbarBig';
import NavbarSmall from './navbarSmall';

const Header =(props)=>{
    return (
      <header>
        <Media queries={{ small: { maxWidth: 800 } }}>
          {(matches) =>
            matches.small ? (
              <NavbarSmall i18n={props.i18n} t={props.t} />
            ) : (
              <NavbarBig i18n={props.i18n} t={props.t} />
            )
          }
        </Media>
      </header>
    );
}
export default Header