export const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Logo at the top */}
          <div className="flex justify-center mb-8">
            <img src="/supreme.png" alt="Logo" className="h-12" />
          </div>
  
          {/* 4 Rows */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-300">
            
            {/* Application Section */}
            <div>
              <h3 className="text-white font-semibold mb-3">Application</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Apparel</a></li>
                <li><a href="#" className="hover:text-blue-400">Automotive</a></li>
                <li><a href="#" className="hover:text-blue-400">Filtration</a></li>
                <li><a href="#" className="hover:text-blue-400">Customised Solutions</a></li>
              </ul>
            </div>
  
            {/* Company Section */}
            <div>
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Innovation</a></li>
                <li><a href="#" className="hover:text-blue-400">Global Competency</a></li>
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>
  
            {/* More Section */}
            <div>
              <h3 className="text-white font-semibold mb-3">More</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms and Conditions</a></li>
              </ul>
            </div>
  
            {/* Follow Us Section */}
            <div>
              <h3 className="text-white font-semibold mb-3">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400">Linkedin</a></li>
                <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-400">Medium</a></li>
              </ul>
            </div>
  
          </div>
        </div>
      </footer>
    );
  };
  