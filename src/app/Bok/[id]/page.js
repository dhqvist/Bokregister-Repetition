"use client";
import { usePathname } from "next/navigation";
import { useBooks } from "@/utility/BookContext.js"; // Import the custom hook to use book context

function BookDetailsPage() {
  const { books } = useBooks();
  const pathname = usePathname();
  const book = books.find(
    (book) => book.id === parseInt(pathname.split("/")[2]) // Get the book id from the pathname and find the book with the matching id
  );

  if (!book) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4 mt-20">
        Bok hittades inte tyvärr 😞
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="flex flex-col items-start justify-center gap-6 py-14 ">
        <h3 className="text-2xl ">
          <strong className="text-blue-600 ">Titel:</strong> {book.title}
        </h3>
        <p>
          <strong className="text-blue-600  ">Författare:</strong> {book.author}
        </p>
        <p>
          <strong className="text-blue-600  ">ISBN:</strong> {book.isbn}
        </p>
        <p>
          <strong className="text-blue-600  pr-1">Sammanfattning:</strong>
          Inget här 😞
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 text-white bg-blue-700 hover:bg-orange-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800 hover:text-blue-600"
        >
          Tillbaka
        </button>
      </div>
    </main>
  );
}

export default BookDetailsPage;
