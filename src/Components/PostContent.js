import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MainHeader from './MainHeader';
import BlogApi from "../blog_api";

class PostContent extends Component {

    constructor(props) {
        super(props);

        this.blog = BlogApi.get(parseInt(props.match.params.number));
    }

    render() {
        return (
            <div className='post_content'>
                <MainHeader src={this.blog.src}/>
                <h1 className='post_title'>{this.blog.article}</h1>
                <p>{this.blog.postInfo}</p>
                <span><Link to='/'>Back to Main</Link></span>
            </div>
        )
    }
}

export default PostContent;