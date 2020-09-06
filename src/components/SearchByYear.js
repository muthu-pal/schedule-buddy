import React from 'react';


import MyHeader from './myHeader.js';
import MyFooter from './myFooter.js';

import './myHeader.css'
import './myFooter.css'
import './SearchByClass.css'

import db from '../databaseConnection'; 
import { getRecommendedClasses} from '../firestoreFunctions'; 


class SearchByYear extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            major: "",
            year: "",
        }
    }

    handleRequest = () => {
        getRecommendedClasses(this.state.year, this.state.major, db).then(console.log); 
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return (
        <div>
          
          
            <MyHeader />
            {/* middle section starts here */}
                            <div class="form">
                    <div class='form-row'>
                    <label for='major'>major: &ensp;&thinsp;&thinsp;&thinsp;&thinsp;</label>
                    <input id='major' name='major' type='text' onChange={this.myChangeHandler}/>
                    </div>
                    <div class='year-dropdown'>
                    <label for='year'>&ensp;year:&ensp;&ensp;&ensp;&ensp;&thinsp;</label>
                    <select class='year' name='year' onChange={this.myChangeHandler}>
                        <option value='empty'></option>
                        <option value='1st'>1st</option>
                        <option value='2nd'>2nd</option>
                        <option value='3rd'>3rd</option>
                        <option value='4th'>4th</option>
                        <option value='other'>other</option>
                    </select>
                    </div>
                    <div class="submit-button">
                    <button onClick={this.handleRequest} > submit </button>
                    </div>
                </div>
             {/* middle section ends here */}
            <MyFooter />
        </div>
      );
    }
}

export default SearchByYear