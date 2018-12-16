import React, {Component} from 'react';

class NavToggle extends Component{
    constructor(props){
        super(props);

        this.state = {open:false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({open: !this.state.open});
    }


    render(){

         let className;

         if(this.state.open){
             className = 'active';
         }else{
             className = 'nonActive';
         }
        return(

                <span className='navBar_toggle'>
                    <p onClick={this.toggleMenu}>
                         MenuBar...
                    </p>
                     <ul className={className}>
                        <li><a href='#'>Nature</a></li>
                        <li><a href='#'>People</a></li><li><a href='#'>Trips</a></li>
                        <li><a href='#'>Animals</a></li>
                        <li><a href='#'>Fashion</a></li>
                        <li><a href='#'>Tech</a></li>
                        <li><a href='#'>...</a></li>
            </ul>
                </span>
        )
    }

}

export default NavToggle;