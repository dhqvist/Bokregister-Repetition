"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBooks } from "@/utility/BookContext.js"; // Import the custom hook to use book context

function CreateBook() {
  const [title, setTitle] = useState(""); // State to store the title of the book
  const [author, setAuthor] = useState(""); // State to store the author of the book
  const router = useRouter();
  const { handleCreateBook } = useBooks(); // Get the handleCreateBook function from the context

  // Get the length of the books array to generate a unique id for the new book
  const bookId = useBooks().books.length;

  // Function to handle form submit and create a new book
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: bookId + 1, // Increment the bookId by 1 to generate a unique id for the new book
      title,
      author,
      isbn: Array.from({ length: 13 }, () =>
        Math.floor(Math.random() * 10)
      ).join(""), // Generate a random 13-digit number for the ISBN when creating a new book
    };
    handleCreateBook(newBook);
    router.push("/"); // Navigate to the home page after adding the book
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14">
      <div class="max-w-2xl w-full">
        <form class="p-7" onSubmit={handleSubmit}>
          <h1 className=" text-2xl font-bold text-start">Lägg till bok</h1>

          <div className="grid xl:grid-cols-2 xl:gap-6 mt-14">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="titel"
                id="titel"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setTitle(e.target.value)} // Update the title state on input change
              />
              <label
                for="titel"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Titel
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="författare"
                id="titel"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setAuthor(e.target.value)} // Update the author state on input change
              />
              <label
                for="författare"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Författare
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-orange-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800 hover:text-blue-600"
          >
            Lägg till
          </button>
        </form>
      </div>
    </main>
  );
}
export default CreateBook;
