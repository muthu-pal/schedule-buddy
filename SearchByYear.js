import React from 'react';


import MyHeader from './myHeader.js';
import MyFooter from './myFooter.js';

import './myHeader.css'
import './myFooter.css'
import './SearchByClass.css'



const SearchByYear = () => {
    return (
        <div>
          
          
            <MyHeader />
            {/* middle section starts here */}
                            <div class="form">
                    <div class='form-row'>
                    <label for='major'>major: &ensp;&thinsp;&thinsp;&thinsp;&thinsp;</label>
                    <input id='major-name' name='major-name' type='text'/>
                    </div>
                    <div class='year-dropdown'>
                    <label for='year'>&ensp;year:&ensp;&ensp;&ensp;&ensp;&thinsp;</label>
                    <select class='year' name='year'>
                        <option value='empty'></option>
                        <option value='1st'>1st</option>
                        <option value='2nd'>2nd</option>
                        <option value='3rd'>3rd</option>
                        <option value='4th'>4th</option>
                        <option value='other'>other</option>
                    </select>
                    </div>
                    <div class="submit-button">
                    <p>submit</p>
                    </div>
                </div>
             {/* middle section ends here */}
            <MyFooter />
          
    
    
    
    
    
    
        </div>
      );
}

export default SearchByYear