import { Link } from "gatsby";
import React, { useState } from "react";

import signitureImage from "../images/signature.jpg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-gray">
      <div className="flex flex-w rap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <img className="w-2/3 lg:w-1/2 md:w-2/3 items-center" src={signitureImage} alt="青木宏和 | HIROTO"/>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-gray border border-gray rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `ABOUT`,
            },
            {
              route: `/career`,
              title: `CAREER`,
            },
            {
              route: `/contact`,
              title: `CONTACT`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-gray-700 no-underline md:inline-block md:mt-0 md:ml-6 hover:underline"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
