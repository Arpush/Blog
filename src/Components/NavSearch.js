import React, {Component} from 'react';
import Search from '../Files/Search.png';

class NavSearch extends Component{
    constructor(props){
        super(props);

        this.state = {open:false};
        this.openSearch= this.openSearch.bind(this);
    }

    openSearch(){
        this.setState({open: !this.state.open});
    }



    render(){
        return(
            <div className={this.state.open? 'nav_search_open' : 'nav_search_close'}>
              <input type='search' placeholder=' Search...'/>
                <div className='nav_search' onClick={this.openSearch}>
                <img className='open_img' src={Search} alt='search_icon' width='50px' height='50px'/>
                </div>
            </div>
        )
    }

}

export default NavSearch;