import React, {Component} from 'react';

var images = require.context('../Files', true);

class MainHeader extends Component {

    constructor(props) {
        super(props);

        this.src = this.props.src;
        this.image = images(`./${this.src}.png`);
    }

    render() {
        return (
            <div className='main_header'>
                <img className={this.src !== 'Layer3' ? 'dynamic' : 'static'} src={this.image} alt={this.src}/>
            </div>
        )
    }
}

export default MainHeader;