import React, {Component} from 'react';
import StaticInfo from './StaticInfo';
import NewsLetter from './NewsLetter';
import End from './End.js';

class Footer extends Component{

    render(){
        return(
            <div>
               <StaticInfo/>
               <NewsLetter/>
               <End/>
            </div>
        )
    }

}

export default Footer;