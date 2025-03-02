export const Header = () => {
    return (
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        {/* Left: Logo */}
        <div className="text-xl font-bold text-gray-800">
          <img src="/supreme.png" alt="Logo" className="h-10 w-auto" />
        </div>
  
        {/* Right: Contact Us, LinkedIn, User Icon */}
        <div className="flex items-center space-x-6">
          <button className="px-4 py-2 bg-[#5CD6FF] w-[145px] h-[50px] text-black rounded-[100px] hover:bg-blue-700 hover:text-white cursor-pointer">
            Contact Us
          </button>
  
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
          </a>
  
          {/* User Icon */}
          <img src="/eng.png" alt="User" className="h-8 w-10" />
        </div>
      </header>
    );
  };
  