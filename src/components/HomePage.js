"use client";
import { useBooks } from "@/utility/BookContext.js"; // Import the custom hook to use book context
import { useRouter } from "next/navigation"; // Import the useRouter hook from Next.js for navigation

function HomePage() {
  const { books } = useBooks(); // Get the books data from the context
  const router = useRouter(); // Get the router object for navigation

  // Function to handle row click and navigate to the book details page
  const handleRowClick = (id) => {
    router.push(`/Bok/${id}`);
  };

  return (
    <section className="">
      <h2 className="mt-14 text-2xl text-start font-bold">Våra böcker</h2>
      <div className="flex flex-col mt-2">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b  font-medium text-white dark:border-neutral-500 dark:bg-blue-800 dark:bg-opacity-80 rounded-full">
                  <tr>
                    <th scope="col" className="sm:px-6 py-4 font-bold">
                      Författare
                    </th>
                    <th scope="col" className="sm:px-6 py-4 font-bold">
                      Titel
                    </th>

                    <th
                      scope="col"
                      className="sm:px-6 py-4  hidden sm:block font-bold"
                    >
                      ISBN
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Map over the books array and create a table row for each book */}
                  {books.map((book) => (
                    <tr
                      key={book.id} // Unique key for each row
                      className="border-b dark:border-neutral-500 hover:bg-blue-700 hover:opacity-30 hover:cursor-pointer"
                      onClick={() => handleRowClick(book.id)} // Handle row click to navigate to book details
                    >
                      <td className="whitespace-nowrap md:px-16 sm:px-6 px-2 py-4 ">
                        {book.title}
                      </td>
                      <td className="whitespace-nowrap md:px-16 sm:px-6 px-4 py-4 ">
                        {book.author}
                      </td>
                      <td className="whitespace-nowrap md:px-16 sm:px-6 py-4 px-2 font-medium hidden sm:block">
                        {book.isbn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomePage;
