import React, {Component} from 'react';
import Header from "./Components/Header";
import DefaultMain from './Components/DefaultMain';
import Footer from './Components/Footer';


class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <DefaultMain/>
                <Footer/>
            </div>
        );
    }
}


export default App;
