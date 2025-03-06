
const Footer = () => {
  return (
    <footer className="py-10 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              CHAMAN
            </span>
            <p className="text-gray-400 mt-2">Front-End Developer | Web Developer | AI Expert</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Chaman Kesani. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, Tailwind CSS & Modern Web Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
