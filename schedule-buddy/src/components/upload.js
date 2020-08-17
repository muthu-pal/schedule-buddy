import React from 'react';
import { render } from '@testing-library/react';
import SelectSearch from 'react-select-search';

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
            classes: "",
            classnames: ""
        };
        //this.change = this.change.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return(
            <form>
                <input
                    name = "username"
                    placeholder = "username"
                    value = {this.state.username}
                    onChange = {e => this.handleChange(e)}
                />
                <input
                    name = "description"
                    placeholder = "description"
                    value = {this.state.description}
                    onChange = {e => this.handleChange(e)}
                />
            </form>
        );
    }
    
    yearSearch = () => (
        <SelectSearch
            placeholder="year"
            options={[
            { value: '1', name: 'First Year' },
            { value: '2', name: 'Second year' },
            { value: '3', name: 'Third Year' },
            { value: '4', name: 'Fourth Year' },
            { value: '5', name: 'Other' }
            ]}
            search          
        />
    );

    ratingSearch = () => (
        <SelectSearch
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
        />
    );

    quarterSearch = () => (
        <SelectSearch
            placeholder="quarter"
            options={[
            { value: 'Fall', name: 'Fall' },
            { value: 'Winter', name: 'Winter' },
            { value: 'Spring', name: 'Spring' },
            { value: 'Summer', name: 'Summer' },
            ]}
            search          
        />
    );

    /*
    majorSearch = () => (
        <SelectSearch
            placeholder="major"
            options={majors} //"majors" should be a .txt file with all the different majors or something like that
            search           
        />
    );

    classSearch = () => (
        <SelectSearch
            placeholder="class"
            options={class} //"classes" should be a .txt file with all the different classes or something like that (ex: COM SCI, MATH, LING)
            search           
        />
    );

    classNumberSearch = () => (
        <SelectSearch
            placeholder="classNumber"
            options={classNumbers} //"classNumbers" should be a .txt file with all the different classes or something like that (ex: 1, 32A, 111)
            search           
        />
    );
    */
}


