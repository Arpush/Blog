import React, {Component} from 'react';


class NavTypes extends Component{

    render(){
        return(
            <ul className='nav_types'>
                <li><a href='#'>Nature</a></li>
                <li><a href='#'>People</a></li>
                <li><a href='#'>Trips</a></li>
                <li><a href='#'>Animals</a></li>
                <li><a href='#'>Fashion</a></li>
                <li><a href='#'>Tech</a></li>
                <li><a href='#'>...</a></li>
            </ul>
        )
    }

}

export default NavTypes;