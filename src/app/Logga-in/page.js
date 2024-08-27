"use client";
import Image from "next/image";

// Simple sign in page with no functionality
function Signin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div class="max-w-2xl">
        <form class="p-7">
          <Image
            className="object-fill opacity-80"
            style={{ width: "100%", height: "auto" }}
            src="/images/hundåbok 1.png"
            alt="logo"
            width={200}
            height={200}
            format="webp"
          />
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="Användarnamn"
                id="Användarnamn"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="Användarnamn"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Användarnamn
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="Lösenord"
                id="Lösenord"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="Lösenord"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Lösenord
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-orange-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800 hover:text-blue-600 mx-auto block mt-10"
          >
            Logga in
          </button>
        </form>
      </div>
    </main>
  );
}
export default Signin;
