import React from "react";
import Result from "../Result/index.js";

function Container(props) {
    if (props.path === "/") {
        return (
            <div id="container" className="container-fluid">
                <h2>RESULTS</h2>
                {props.books.map(book => {
                    const bookInfo = book.volumeInfo;
                    return (
                        <Result
                            title={bookInfo.title}
                            authors={bookInfo.authors}
                            img={bookInfo.imageLinks}
                            description={bookInfo.description}
                            link={bookInfo.canonicalVolumeLink}
                            path={props.path}
                            key={book.id}
                            id={book.id}
                        />
                    );
                })}
            </div>
        );
    } else if (props.path === "/saved") {
        if (props.savedBooks.length > 0) {
            return (
                <div id="container">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map(book => {
                        return (
                            <Result
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={book.link}
                                img={book.img}
                                path={props.path}
                                key={book._id}
                                id={book._id}
                            />
                        );
                    })}
                </div>
            );
        } else {
            return (
                <div id="container">
                    <h3>Saved Books</h3>
                    <p>There are currently no saved books!</p>
                </div>
            );
        }
    }
}

export default Container;
