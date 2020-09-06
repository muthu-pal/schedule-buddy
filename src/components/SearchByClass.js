import React from 'react';


import MyHeader from './myHeader.js';
import MyFooter from './myFooter.js';

import './myHeader.css'
import './myFooter.css'
import './SearchByClass.css'


const SearchByClass = () => {
    return (
        <div>
          
          
            <MyHeader />
            {/* middle section starts here */}
                            <div class="form">
                    <div class='form-row'>
                    <label for='major'>major: &ensp;&thinsp;&thinsp;&thinsp;&thinsp;</label>
                    <input id='major-name' name='major-name' type='text'/>
                    </div>
                    <div class='form-row'>
                    <label for='classes'>classes: &ensp;&thinsp;</label>
                    <input id='classes-name' name='classes-name' type='text'/>
                    </div>
                    <p class="caption">* please use official subject names and separate <br /> &ensp;&ensp;&ensp;classes by commas, e.g. "com sci 111, com sci 180"</p>
                    <button onClick>submit</button>
                </div>
            {/* middle section ends here */}
            <MyFooter />
          
    
    
    
    
    
    
        </div>
      );
}

export default SearchByClass