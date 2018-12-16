import React, {Component} from 'react';
import NavBar from './NavBar';
import Slider from './Slider';
import StaticInfo from './StaticInfo';

import '../Style/Header_nav.css';

class Header extends Component{

    render(){
        return(
            <div>
                <NavBar/>
                <Slider/>
                <StaticInfo/>
            </div>
        )
    }


}

export default Header;