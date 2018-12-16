import React, {Component} from 'react';
import {Carousel , } from 'react-bootstrap';

import Sl1 from '../Files/Sl1.jpg';
import Sl2 from '../Files/Sl2.jpg';
import Sl3 from '../Files/Sl3.jpg';
import Sliderimage from '../Files/Sliderimage.png';

import '../Style/Slider.css';

class Slider extends Component{

    render(){
        return(
            <div className='header_carousel'>
            <Carousel>
                <Carousel.Item>
                    <div className='div1'>

                        <div className='slider_info'>
                            <img className='slider_img' src={Sliderimage} alt={Sliderimage}/>
                            <h2 className='slider_text'>Vestibulum ante ipsum primis in faucibus orciluctus et ultirces posuere cubilia.</h2>
                        </div>
                        <div className='slider_bottom'>
                            <p>
                                Trips
                            </p>
                            <span>14September 2016 | <a href='#'>John Doe</a></span>
                        </div>

                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='div2'>
                        <div className='slider_info'>
                            <img className='slider_img' src={Sliderimage} alt={Sliderimage}/>
                            <h2 className='slider_text'>Vestibulum ante ipsum primis in faucibus orciluctus et ultirces posuere cubilia.</h2>
                        </div>
                        <div className='slider_bottom'>
                           <p>
                           Trips
                           </p>
                            <span>14September 2016 | <a href='#'>John Doe</a></span>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='div3'>
                        <div className='slider_info'>
                            <img className='slider_img' src={Sliderimage} alt={Sliderimage}/>
                            <h2 className='slider_text'>Vestibulum ante ipsum primis in faucibus orciluctus et ultirces posuere cubilia.</h2>
                        </div>
                        <div className='slider_bottom'>
                            <p>
                                Trips
                            </p>
                            <span>14September 2016 | <a href='#'>John Doe</a></span>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }

}

export default Slider;