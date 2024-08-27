"use client";
import { createContext, useContext, useState } from "react";
import booksData from "@/data/booksData.json"; // Import initial books data from a JSON file

const BookContext = createContext(); // Create a new context for books

// BookProvider component to provide book data and functions to its children
export function BookProvider({ children }) {
  const [books, setBooks] = useState(booksData); // Initialize state with books data

  // Function to add a new book to the list
  const handleCreateBook = (newBook) => {
    setBooks((prevBooks) => [newBook, ...prevBooks]);
  };

  return (
    // Provide books and handleCreateBook function to the context
    <BookContext.Provider value={{ books, handleCreateBook }}>
      {children}
    </BookContext.Provider>
  );
}

// Custom hook to use the BookContext
export function useBooks() {
  return useContext(BookContext);
}
