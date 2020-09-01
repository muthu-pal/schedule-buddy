import React from 'react';
import SelectSearch from 'react-select-search';
import MyHeader from "./myHeader.js";
import MyFooter from "./myFooter.js";
import './upload.css';

import firebase from "firebase";
import { uploadSchedule } from  '../firestoreDB.js';
import CreateClass from './createClass.js'
import {majorNames, class_names} from './classNames.js'


const firebaseConfig = {
    apiKey: "AIzaSyB-ZOFGWh1RypwbK1I_Tz6Pw0S073k16zU",
    authDomain: "schedule-buddy-fc6c5.firebaseapp.com",
    databaseURL: "https://schedule-buddy-fc6c5.firebaseio.com",
    projectId: "schedule-buddy-fc6c5",
    storageBucket: "schedule-buddy-fc6c5.appspot.com",
    messagingSenderId: "701626130578",
    appId: "1:701626130578:web:c68e333703087b6d1d064b"
};

firebase.initializeApp(firebaseConfig); 
const db = firebase.firestore();

let tempClasses = [];

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            year: "",
            rating: "",
            quarter: "",
            major: "",
            description: "",
            class_one: {
                c_name: "",
                c_num: "",
                type: "",
                difficulty: "",
                interest: "",
                comment: ""
            },
            class_two: {
                name: "",
                number: "",
                type: "",
                difficulty: "",
                interest: "",
                comment: ""
            },
            class_three: {
                name: "",
                number: "",
                type: "",
                difficulty: "",
                interest: "",
                comment: ""
            },
            class_four: {
                name: "",
                number: "",
                type: "",
                difficulty: "",
                interest: "",
                comment: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    selectChange = (val, name) => {
        this.setState({
            [name]: val
        });
    }



    submitQuarter = () => {
        uploadSchedule(this.state.quarter, this.state.year, 
            "major", [], this.state.rating, this.state.description, db);
    }
    
    render() {
        console.log(this.state);
        return(
            <div>
                <MyHeader/>
                <div className = "container">
                    <form className = "inside">
                        <input className = "input"
                            name = "username"
                            placeholder = "username"
                            value = {this.state.username}
                            onChange = {e => this.handleChange(e)}
                        />
                        <h6><br/></h6>
                        <input className = "input"
                            name = "description"
                            placeholder = "description"
                            value = {this.state.description}
                            onChange = {e => this.handleChange(e)}
                        />
                        <h6><br/></h6>
                        <SelectSearch
                            name="year"
                            placeholder="year"
                            value = {this.state.year}
                            
                            options={[
                            { value: '1', name: 'First Year' },
                            { value: '2', name: 'Second year' },
                            { value: '3', name: 'Third Year' },
                            { value: '4', name: 'Fourth Year' },
                            { value: '5', name: 'Other' }
                            ]}

                            search 

                            onChange = {val => this.selectChange(val, "year")}
                                    
                        />

                        <br />
                        <SelectSearch
                            name="rating"
                            placeholder="rating"

                            options={[
                            { value: '1', name: '1' },
                            { value: '2', name: '2' },
                            { value: '3', name: '3' },
                            { value: '4', name: '4' },
                            { value: '5', name: '5' },
                            { value: '6', name: '6' },
                            { value: '7', name: '7' },
                            { value: '8', name: '8' },
                            { value: '9', name: '9' },
                            { value: '10', name: '10' }
                            ]}
                            search  
                            value = {this.state.rating}  
                            onChange={val => this.selectChange(val, "rating")}     
                        />
                        <br />
                        <SelectSearch
                            placeholder="quarter"
                            options={[
                            { value: 'Fall', name: 'Fall' },
                            { value: 'Winter', name: 'Winter' },
                            { value: 'Spring', name: 'Spring' },
                            { value: 'Summer', name: 'Summer' },
                            ]}
                            search
                            value={this.state.quarter}
                            onChange={val => this.selectChange(val, "quarter")}
                        />
                        <br />
                        <SelectSearch
                            placeholder="major"
                            options={majorNames}
                            search
                            value={this.state.major}
                            onChange={val => this.selectChange(val, "major")}
                        />
                        <br />

                        {/* to select class name */}
                        <h4>Class One:</h4>
                        <SelectSearch
                            name="className"
                            placeholder="class name"
                            value = {this.state.class_one.c_name}
                            
                            options={[
                            { value: 'first year', name: 'First Year' },
                            ]}

                            search 

                            onChange = {val => 
                                this.setState({ class_one: { ...this.state.class_one, c_name: val} })
                            }
                                    
                        />
                        <br />
                        {/* to select class number */}
                        <input className = "input"
                            name = "c_num"
                            placeholder = "class number"
                            value = {this.state.class_one.c_num}
                            onChange = {val => this.setState({ class_one: { ...this.state.class_one, c_num: val} })}
                        />
                        <br />
                        {/* type of class */}
                        <SelectSearch
                            name="type"
                            placeholder="class type"
                            value = {this.state.class_one.type}
                            
                            options={[
                            { value: 'Major', name: 'Major' },
                            { value: 'GE', name: 'GE' },
                            { value: 'Fiat Lux', name: 'Fiat Lux' },
                            { value: 'Other', name: 'Other' },
                            ]}

                            search 

                            onChange = {val => 
                                this.setState({ class_one: { ...this.state.class_one, type: val} })
                            }
                                    
                        />
                        <h6><br/></h6>
                        <SelectSearch
                            name="difficulty"
                            placeholder="difficulty rating"

                            options={[
                            { value: '1', name: '1 (least)' },
                            { value: '2', name: '2' },
                            { value: '3', name: '3' },
                            { value: '4', name: '4' },
                            { value: '5', name: '5' },
                            { value: '6', name: '6' },
                            { value: '7', name: '7' },
                            { value: '8', name: '8' },
                            { value: '9', name: '9' },
                            { value: '10', name: '10 (most)' }
                            ]}
                            search  
                            value = {this.state.class_one.difficulty}  
                            onChange = {val => 
                                this.setState({ class_one: { ...this.state.class_one, difficulty: val} })
                            } 
                        />
                        <br />
                        <SelectSearch
                            name="interest"
                            placeholder="interest rating"

                            options={[
                            { value: '1', name: '1 (least)' },
                            { value: '2', name: '2' },
                            { value: '3', name: '3' },
                            { value: '4', name: '4' },
                            { value: '5', name: '5' },
                            { value: '6', name: '6' },
                            { value: '7', name: '7' },
                            { value: '8', name: '8' },
                            { value: '9', name: '9' },
                            { value: '10', name: '10 (most)' }
                            ]}
                            search  
                            value = {this.state.class_one.interest}  
                            onChange = {val => 
                                this.setState({ class_one: { ...this.state.class_one, interest: val} })
                            }  
                        />
                        <br />
                        <input className = "input"
                            name = "comment"
                            placeholder = "comment"
                            value = {this.state.class_one.comment}
                            onChange = {this.handleChange}
                        />
                        <h6><br/></h6>
                        <button onClick={this.submitQuarter}> submit </button>
                    </form>
                    
                </div>
                <MyFooter/>
            </div>
        );
    }
}


