import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../Redux/action";

const BookForm = ({ currentBook, setIsEditing }) => {
  const [title, setTitle] = useState(currentBook ? currentBook.title : "");
  const [author, setAuthor] = useState(currentBook ? currentBook.author : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: currentBook ? currentBook.id : Date.now(), title, author };
    if (currentBook) {
      dispatch(editBook(currentBook.id, book));
      setIsEditing(false);
    } else {
      dispatch(addBook(book));
    }
    setTitle("");
    setAuthor("");
  };

  return (
    
    <form onSubmit={handleSubmit}>
     <div style={{display:'flex',justifyContent:'center',color:'green'}}><h3>Book Management System</h3></div>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">{currentBook ? "Update" : "Add"} Book</button>
    </form>
  );
};

export default BookForm;
