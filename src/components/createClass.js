import React from 'react';
import SelectSearch from 'react-select-search';

export default class CreateClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            classNum: "",
            type: "",
            difficultyRating: "",
            interestingRating: "",
            comment: ""
        };
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


    render() {
        console.log(this.state);
        return(
            
                <div className = "container">
                    <form className = "inside">
                        {/* to select class name */}
                        <SelectSearch
                            name="className"
                            placeholder="class name"
                            value = {this.state.name}
                            
                            options={[
                            { value: '1', name: 'First Year' },
                            ]}

                            search 

                            onChange = {val => this.selectChange(val, "className")}
                                    
                        />
                        <br />
                        {/* to select class number */}
                        <input className = "input"
                            name = "classNum"
                            placeholder = "class number"
                            value = {this.state.classNum}
                            onChange = {e => this.handleChange(e)}
                        />
                        <br />
                        {/* type of class */}
                        <SelectSearch
                            name="type"
                            placeholder="class type"
                            value = {this.state.type}
                            
                            options={[
                            { value: 'Major', name: 'Major' },
                            { value: 'GE', name: 'GE' },
                            { value: 'Fiat Lux', name: 'Fiat Lux' },
                            { value: 'Other', name: 'Other' },
                            ]}

                            search 

                            onChange = {val => this.selectChange(val, "type")}
                                    
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
                            value = {this.state.difficultyRating}  
                            onChange={val => this.selectChange(val, "difficulty")}     
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
                            value = {this.state.interestingRating}  
                            onChange={val => this.selectChange(val, "interest")}     
                        />
                        <br />
                        <input className = "input"
                            name = "comment"
                            placeholder = "comment"
                            value = {this.state.comment}
                            onChange = {e => this.handleChange(e)}
                        />
                        <h6><br/></h6>

                        {/* <button onClick={this.submitQuarter}> submit this class </button> */}
                    </form>
                    
                </div>
                
        );
    }
}

    