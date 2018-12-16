import React, {Component} from 'react';
import {Link} from 'react-router-dom';

var images = require.context('../Files', true);

class Post extends Component {

    constructor(props) {
        super(props);

        this.blog = this.props.post;
        this.image = images(`./${this.blog.src}.png`);
    }

    render() {
        return (
            <div className='rowComp_card'>
                <div>
                    <img src={this.image} alt={this.blog.src}/>
                    <span className={this.blog.className}>{this.blog.type}</span>
                </div>
                <div>
                    <Link to={`/post/${this.blog.number}`}>
                        <p>
                            {this.blog.title}
                        </p>
                    </Link>
                    <span>
                        {this.blog.date}
                        <a href='#'>{this.blog.dateLink}</a>
                    </span>
                </div>
            </div>
        )
    }
}

export default Post;