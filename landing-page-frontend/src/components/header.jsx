import { useEffect, useState } from "react";
import Focusrealmlogo from "../images/Focusrealmlogo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full z-50 transition-shadow ${isScrolled ? 'fixed top-0 left-0 shadow-md bg-white' : 'relative'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img
            src={Focusrealmlogo}
            alt="header logo"
            className="h-[30px] w-[154px] object-contain"
          />
        </div>
        <nav className="space-x-16">
          <a href="/about" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="/products" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="/projects" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
        <div className="gap-4 flex items-center justify-center">
          <a
            href="/signin"
            className="font-normal text-[14px] text-[#0148b7] border border-[#0148b7] rounded-[25px] px-4 py-2 hover:bg-blue-600"
          >
            Parent Helpdesk
          </a>
          <button className="text-white rounded-[25px] bg-[#0148b7] px-4 py-2 text-[14px]">
            Enroll now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
