

const Footer = () => {

    return (
        <footer className="py-6 lg:px-40 bg-gray-100 shadow-inner">
          <div className="container mx-auto px-4 text-center text-gray-600">

           <div className="flex justify-between">

           <h2 className="text-2xl">DEW</h2>
            
           <div className="mt-4 space-x-4">
              <a href="#about" className="hover:text-gray-900">About Us</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
              <a href="#privacy" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#terms" className="hover:text-gray-900">Terms of Service</a>
            </div>
           </div>
            <p className="mt-4">© 2024 Detroit Experience Wrapper. All rights reserved.</p>
          </div>
        </footer>
    );
};

export default Footer;