import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-gray-100">
      <header className="bg-gray-900 p-4 shadow-md border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Forgotten Realms Calendar</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/moon-phases"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Moon Phases
                </Link>
              </li>
              <li>
                <Link
                  href="/notes"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Notes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">{children}</main>

      <footer className="bg-gray-900 p-4 mt-auto border-t border-gray-800">
        <div className="container mx-auto text-center text-sm">
          <p>Forgotten Realms Calendar Tool - Next.js Version</p>
          <p className="mt-1">
            Based on the original by Mark A Jindra &copy; 2005 Wizards of the
            Coast, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
