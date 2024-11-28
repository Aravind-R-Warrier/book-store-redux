import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../Redux/action";
import BookForm from "./BookForm";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const [isEditing, setIsEditing] = React.useState(false);
  const [currentBook, setCurrentBook] = React.useState(null);

  const dispatch = useDispatch();

  const handleEdit = (book) => {
    setCurrentBook(book);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
        
      {isEditing ? (
        <BookForm currentBook={currentBook} setIsEditing={setIsEditing} />
      ) : (
        <BookForm />
      )}
      <ul>
        {books.map((book) => (
        <div className="booklist">
            <li key={book.id}>
            {book.title} by {book.author}
          </li>
          <button onClick={() => handleEdit(book)}>Edit</button>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
