import React, {Component} from 'react';
import ProLogo from './ProLogo';
import NavLinks from './NavLinks';
import NavTypes from './NavTypes'
import NavSearch from './NavSearch';
import NavToggle from './NavToggle'

class NavBar extends Component {
    render() {
        return (
            <div className={'header_nav'}>
               <ProLogo/>
                <NavToggle/>
                <NavSearch/>
                <NavLinks/>
                <NavTypes/>
            </div>
        );
    }
}

export default NavBar;

