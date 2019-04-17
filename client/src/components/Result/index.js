import React from "react";
import API from "../../utils/API.js";
import {BrowserRouter as Router} from "react-router-dom";

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            deleted: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSaveClick = event => {
        this.setState({saved: true});
        const books = {
            title: this.props.title,
            author: this.props.author,
            link: this.props.link,
            img: this.props.img,
            description: this.props.description
        }
        event.preventDefault();
        API.saveBook(books).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    handleDeleteClick = event => {
        this.setState({deleted: true});
        event.preventDefault();
        API.deleteBook(this.props.id).then(
            (response) => {
                console.log(response);
                Router.dispatch(this.props.location, null)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return(
            <div className="Result" 
                    id={(this.props.id)? this.props.id: null} 
                    style={{display: this.state.deleted? "none" : "block"}}>
                <div className="row">
                    <div className="aboutBook">
                        <h4>{this.props.title}</h4>
                        <p>Author: {(this.props.authors)? this.props.authors.join(", "): "N/A"}</p>
                    </div>
                </div>
                <div className="row">    
                    <div className="btnDiv">
                        {
                            // if link to book exists include View button
                            (this.props.link)? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button type="button" name="view">View</button></a> : null
                        }
                    </div>     

                    <div className="btnDiv">
                        {
                            // if this.props.path is "/" display save button else display Delete button
                            (this.props.path === "/")? <button type="button" 
                                                                name="save" 
                                                                onClick={this.handleSaveClick} 
                                                                disabled={this.state.saved}>{(this.state.saved)? "Saved" : "Save"}</button> : 
                                <button type="button" 
                                        name="Delete" 
                                        onClick={this.handleDeleteClick} 
                                        disabled={this.state.deleted}>Delete</button>
                        }
                    </div>
                </div>
                <div className="row">
                    {(this.props.img)? <img src= {
                        (this.props.img.thumbnail)? this.props.img.thumbnail: ""
                    } alt="book cover"/>: null}
                    <p>{(this.props.description)? this.props.description: "N/A"}</p>
                </div>
            </div>
        );
    }
}

export default Result;