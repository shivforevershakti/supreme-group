export const ContactUs = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0067B1] py-12 px-6">
        <div className="flex flex-col md:flex-row max-w-4xl w-full h-full justify-between">
          
          {/* Left Box: Contact Information */}
          <div className="md:w-1/2 p-8 text-white flex flex-col items-start space-y-4 h-full">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p>For General Enquiries</p>
  
            <div className="space-y-2">
              <p className="font-semibold">Address:</p>
              <p className="text-sm">110, 16th Road, Chembur, Mumbai – 400071</p>
            </div>
  
            <div className="space-y-2">
              <p className="font-semibold">Phone:</p>
              <p className="text-sm">+91 22 25208822</p>
            </div>
  
            <div className="space-y-2">
              <p className="font-semibold">Email:</p>
              <p className="text-sm">info@supremegroup.co.in</p>
            </div>
          </div>
  
          {/* Right Box: Contact Form */}
          <div className="md:w-1/2 p-8 flex flex-col items-start h-full">
            <form className="space-y-4 w-full">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-3 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-b-4 transition-all duration-300"
                required
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-3 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-b-4 transition-all duration-300"
                required
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full p-3 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-b-4 transition-all duration-300"
                required
              />
              <textarea 
                placeholder="Your Message" 
                className="w-full p-3 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-b-4 transition-all duration-300 h-32"
                required
              ></textarea>
              <button 
                type="submit" 
                className="w-[141px] h-[50px] bg-white text-black rounded-[100px] transition-all duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
  
        </div>
      </div>
    );
  };
  