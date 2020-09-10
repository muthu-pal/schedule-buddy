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
            schedules: [], //array of data 
            classNames: "", 
            showInput: true,
        }
    }

    handleRequest = () => {
        let classNames = this.state.classNames.split(','); 
        getSchedule(classNames, db).then(result =>
            this.setState({
                "schedules": result,
                "showInput": false,    
            })); 
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    
    render() {

        if(this.state.showInput) {

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
                            <input id='classNames' name='classNames' type='text' onChange={this.myChangeHandler}/>
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

        else {
            return (
            <div>
                <MyHeader />
                <div class="form">
                {this.state.schedules[0].classnames}
                </div>
                
                <MyFooter />
            </div>
            );
        }
    }
}

export default SearchByClass 