import React, { Component } from 'react';

// class SearchBar extends Component {
   
    
//     render() {
//         return <input onChange={this.onInputChange} />; //onChange is a prop with value of this.eventHandler
//     }

//     onInputChange(event) { 
//         console.log(event.target.value); //event.target.value is stuff that is inputted
//     }
// }

//shortened ES6 syntax
class SearchBar extends Component {
    constructor(props)  {
        super(props);

        this.state = {term: ''}; //
    }
    render() {
        return (
        <div className="search-bar">
            <input 
            value={this.state.term}//creates controlled component  - 
            onChange = {event => this.onInputChange(event.target.value)} /> 
            {/* onChange is event handler. passed to input which is what we're monitoring for change
                                //event refers to whatever the user action is and describes event, used to get value (value of given by event is referred to as event.target.value; this refers to onChange (which is a prop);  */}
        </div>
        )    
}
    onInputChange(term) {
this.setState({term});
this.props.onSearchTermChange(term);
    }

}


export default SearchBar; 