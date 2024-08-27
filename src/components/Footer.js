"use client";

// Simple footer component
function Footer() {
  return (
    <div className="min-w-full">
      <footer className="p-4 rounded-lg shadow ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            target="_blank"
            className="flex items-center mb-4 sm:mb-0 "
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-4 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-500">
              Bookbite
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400 hover:text-blue-500"
              >
                Om oss
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400 hover:text-blue-500"
              >
                Privat Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400 hover:text-blue-500"
              >
                Licensiering
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400 hover:text-blue-500"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="#"
            target="_blank"
            className="hover:underline hover:text-blue-500"
          >
            Bookbite™
          </a>
          . Alla Rättigheter Reserverad.
        </span>
      </footer>
    </div>
  );
}
export default Footer;
