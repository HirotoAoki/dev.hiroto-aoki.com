//import { Link } from "gatsby";
//import React, { useState } from "react";
import React from "react";

function Footer() {
  return (
    <footer className="text-center bg-gray-700">
      <nav className="flex-none max-w-4xl p-2 mx-auto text-sm md:p-4">
        <p className="text-white justify-center">
          {` `}
          <a
            className="font-bold no-underline"
            href="https://hiroto-aoki.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2013 hiroto-aoki.com
          </a>
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
