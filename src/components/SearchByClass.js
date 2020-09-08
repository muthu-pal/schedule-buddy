import React from 'react';


import MyHeader from './myHeader.js';
import MyFooter from './myFooter.js';

import './myHeader.css'
import './myFooter.css'
import './SearchByClass.css'

import db from '../databaseConnection'; 
import { getSchedule} from '../firestoreFunctions'; 

class SearchByClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            classnames: "",
        }
    }

    handleRequest = () => {
        let classnames = this.state.classnames.split(','); 
        getSchedule(classnames, db).then(console.log); 
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
                        {/* <div class='form-row'>
                        <label for='major'>major: &ensp;&thinsp;&thinsp;&thinsp;&thinsp;</label>
                        <input id='major-name' name='major-name' type='text'/>
                        </div>*/}
                        <div class='form-row'>
                        <label for='classes'>classes: &ensp;&thinsp;</label>
                        <input id='classnames' name='classnames' type='text' onChange={this.myChangeHandler}/>
                        </div>
                        <p class="caption">* please use official subject names and separate <br /> &ensp;&ensp;&ensp;classes by commas, e.g. "com sci 111, com sci 180"</p>
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

export default SearchByClass