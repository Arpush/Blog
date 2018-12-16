import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import MainBody from './MainBody';
import PostContent from './PostContent';

import '../Style/Main.css';


class DefaultMain extends Component{

    render(){
        return(
            <div className='default_main'>
                <Switch>
                    <Route exact path='/' component={MainBody}/>
                    <Route path='/post/:number' component={PostContent}/>
                </Switch>
            </div>
        )
    }
    
}

export default DefaultMain;