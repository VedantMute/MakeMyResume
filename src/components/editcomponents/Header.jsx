import React, { useState } from "react";

const Navbar = ({ handleDownload }) => {
  const [navIsOpened, setNavIsOpened] = useState(false);

  const closeNavbar = () => {
    setNavIsOpened(false);
  };

  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };

  return (
    <>
      <div
        aria-hidden={true}
        onClick={closeNavbar}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          navIsOpened ? "lg:hidden" : "hidden lg:hidden"
        }`}
      />
      <header className="sticky top-0 w-full flex items-center h-20 border-b border-b-gray-200 z-40 bg-white/80 backdrop-filter backdrop-blur-xl courier-prime-regular">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <a href="/" className="relative flex items-center gap-2.5">
              <span aria-hidden={true} className="flex">
              <span className="w-3 h-6 flex bg-blue-500" />
                <span className="w-3 h-6 flex bg-bg mt-2" />
              </span>
              <span className="inline-flex text-lg font-bold text-indigo-950 ">
                Make My Resume{" "}
                
              </span>
            </a>
          </div>
          
          <button
            onClick={handleDownload}
            className="relative flex justify-center px-6  py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-blue-600  text-indigo-600 dark:text-white hover:before:scale-105"
          >
            <span class="relative flex">
              <span class="hidden md:inline-block">Download </span>
              <span class="inline-block ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-3 lucide lucide-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </span>
            </span>
          </button>
        </nav>
      </header>
      
    </>
  );
};

export { Navbar };

export default function Header() {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleDownload = () => {
    setButtonVisible(false);
    setHeaderVisible(false);
    setTimeout(() => {
      setButtonVisible(true);
      setHeaderVisible(true);
      window.print();
    }, 2200);
  };

  return (
    <div>
      <div className={`flex headerlogo mb-10 ${headerVisible ? "" : "hidden"}`}>
        {buttonVisible && <Navbar handleDownload={handleDownload} />}
      </div>
      <div className={`text-center $`}>
        <div contentEditable={true} className="font-bold text-xl ">
          Your Name
        </div>
        <div contentEditable={true} className="f12">
          Pune, Maharashtra 411041 | +91 7077X XXXXX | username@gmail.com |
          linkedin/yourid
        </div>
      </div>
    </div>
  );
}
