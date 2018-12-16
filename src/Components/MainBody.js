import React, {Component} from 'react';
import Post from './Post';


import BlogApi from "./../blog_api";
import MainHeader from "./MainHeader";

class MainBody extends Component {

    render() {
        return (
            <div>
                <MainHeader src={'Layer3'}/>
                <div className='default_main_row1'>
                    {BlogApi.all().map(p => (
                        <Post post={p}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default MainBody;