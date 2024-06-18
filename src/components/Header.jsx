import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center px-5 pt-3">
        <h1 className="text-sm">PORTFOLIO</h1>

        <div
          onClick={() => setDarkMode(!darkMode)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setDarkMode(!darkMode);
            }
          }}
          role="button"
          tabIndex={0} // Make the div focusable
        >
          {darkMode ? (
            <MdWbSunny className="text-xl cursor-pointer duration-300 ease-in-out hover:scale-110" />
          ) : (
            <MdNightsStay className="text-xl cursor-pointer duration-300 ease-in-out hover:scale-110" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
