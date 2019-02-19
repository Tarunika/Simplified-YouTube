import React, { Component } from 'react';

class searchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''}; //this.state is used only in the constructor
  }
  render() {
    return(
    <div className="search-bar">
    <input
      value = {this.state.term}
      onChange={event => this.onInputChange(event.target.value) } />
    </div>
  );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);


  }


}
//const searchBar = () => {
//  return <input />;
//}; // functional component
//class component for it to have memory. ability to be aware

export default searchBar;

//states in react and Redux
//plain js object used to record and rect user events
//when state changes component re renders and all its children re render as well
//only class based compnonents have a state
