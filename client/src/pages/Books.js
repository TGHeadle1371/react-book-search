import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Search/index.js"
import Container from "../components/Container/index.js"

class Books extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        books: [],
        bookInput: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };  
  
  componentDidMount() {
    this.searchGoogle();
  };

  searchGoogle = query => {
    API.searchBooks(query)
      .then(res => this.setState({books:res.data}))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

 
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogle(this.state.bookInput);
  };

  render() {
    return (
        <div>
          <Search 
              bookInput={this.state.bookInput}
              handleInputChange={this.handleInputChange} 
              handleFormSubmit={this.handleFormSubmit}  />
            {(this.state.books.length > 0)?
              <Container 
                books={this.state.books} 
                path={this.props.match.path}/> : null
            }
        </div>
    );
  }
};

export default Books;
