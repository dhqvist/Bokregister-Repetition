"use client";
import Link from "next/link"; // Import the Link component from Next.js for navigation
import { usePathname } from "next/navigation"; // Import the usePathname hook from Next.js to get the current pathname

function Header() {
  // Getting the current pathname so we can clearly see which page we are on
  const pathname = usePathname();

  // Array of links to be displayed in the header
  const links = [
    { href: "/", text: "Startsida" },
    { href: "/Skapa-bok", text: "Lägg till bok" },
    { href: "/Logga-in", text: "Logga in" },
  ];

  return (
    <nav className=" border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded shadow">
      <div className="flex-1 flex flex-col items-center justify-center sm:flex-row gap-4 p-4">
        {/* mapping out the links and implementing the pathname */}
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <h2
              className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-m py-3 px-6 bg-gray-800 bg-opacity-30 rounded-full hover:text-blue-500 hover:text-opacity-50  ${
                pathname === link.href ? "text-blue-600" : ""
              }`}
            >
              {link.text}
            </h2>
          </Link>
        ))}
      </div>
      <div className="flex-none gap-2 sm:mr-4 md:mr-6">
        <p className="text-blue-500 uppercase"></p>
        <div className="relative">
          <div
            tabIndex={0}
            role="button"
            className="text-gray-700 hover:text-gray-900 rounded-full"
          >
            <div className="w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
