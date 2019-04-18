import React from "react";

function Search(props) {
    return(
        <div id="searchContainer" className="container-fluid">
            <h2>Book Search</h2>
            <form id="bookSearch">
                <label>Look up a Title: </label>
                <input 
                    id="bookInput"
                    name="bookInput"
                    type="text"
                    form="bookSearch"
                    className="text-center" 
                    value={props.bookInput} 
                    onChange={props.handleInputChange}
                    placeholder="Type Here"/>
                <br/>
                <button id="searchBtn" type="submit" onClick={props.handleFormSubmit}>Search</button>
                <hr/>
            </form>
        </div>
    );
}

export default Search;