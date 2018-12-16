import React, {Component} from 'react';

import '../Style/Static_Info.css';

import Layer1 from '../Files/Layer1.png';
import Layer2 from '../Files/Layer2.png';


class StaticInfo extends Component{

    render() {
        return (
            <section className='static_info'>
                <div className='flex_container'>
                    <div className='card'>
                        <div>
                            <img src={Layer1} alt={'layer1'}/>
                            <span className='type'>Trips</span>
                        </div>
                        <div>
                            <p>
                                Donec elementum dui semper,pretium dui quis, pre-tium
                                nisl.Nunc quis ornare odio.
                            </p>
                                 <span>
                                     11 September 2016 |<a href={'#'}>John Doe</a>
                                 </span>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={Layer2} alt={'layer2'}/>
                            <span className='type2'>Tech</span>
                        </div>
                        <div>
                            <p>
                                Maecenas quis loborotis nunc.Nullam sit amet augue vel
                                odoi con -gue vulputate a ut nisi.
                            </p>
                            <span>
                                14 September 2016 |<a href={'#'}>John Doe</a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
    )
    }

    }

    export default StaticInfo;