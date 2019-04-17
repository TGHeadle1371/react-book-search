import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book from Google
  searchBooks: function(title) {
    return axios.post("/books", {title: title});
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/", id);
  },
  // Saves a book to the database
  saveBook: function(books) {
    return axios.post("/api/books/", books);
  }
};
