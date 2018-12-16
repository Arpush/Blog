import React, {Component} from 'react';
import '../Style/News_letter.css';

class NewsLetter extends Component{

    render(){
        return(
          <div className='news'>
              <h2>Newsletter</h2>
              <p>Donec elementum dui semper, pretium dui quis, pretium nisl.</p>
              <form>
                  <input type='text'>

                  </input>
                  <button type='button'>Sign Up</button>
              </form>
          </div>
        )
    }

}

export default NewsLetter;