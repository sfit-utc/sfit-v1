import { Link } from "react-scroll";
import "../index.css";

function NavBar() {
  return (
    <nav
      className="fixed top-5 right-5 z-50 hidden lg:flex justify-between items-center
                 h-16 px-8 backdrop-blur-md rounded-full w-fit
                 shadow-lg border-b border-white/10"
    >
      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        <div className="group relative">
          <Link
            className="relative text-[#03eb73] font-bold text-lg px-4 py-2 rounded-lg
                     transition-all duration-300 ease-in-out cursor-pointer
                     hover:text-green-500 hover:scale-105
                     before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                     before:bg-gradient-to-r before:from-[#03eb73] before:to-green-500
                     before:transition-all before:duration-300
                     hover:before:w-full"
            to="home" 
            duration={500} 
            smooth={true}
          >
            Trang chủ
          </Link>
        </div>

        <div className="group relative">
          <Link
            className="relative text-[#03eb73] font-bold text-lg px-4 py-2 rounded-lg
                     transition-all duration-300 ease-in-out cursor-pointer
                     hover:text-green-500 hover:scale-105
                     before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                     before:bg-gradient-to-r before:from-[#03eb73] before:to-green-500
                     before:transition-all before:duration-300
                     hover:before:w-full"
            to="team" 
            duration={500} 
            smooth={true}
          >
            Các ban trực thuộc
          </Link>
        </div>

        <div className="group relative">
          <Link
            className="relative text-[#03eb73] font-bold text-lg px-4 py-2 rounded-lg
                     transition-all duration-300 ease-in-out cursor-pointer
                     hover:text-green-500 hover:scale-105
                     before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                     before:bg-gradient-to-r before:from-[#03eb73] before:to-green-500
                     before:transition-all before:duration-300
                     hover:before:w-full"
            to="activity" 
            duration={500} 
            smooth={true}
          >
            Hoạt động
          </Link>
        </div>

        <div className="group relative">
          <Link
      className="relative text-[#03eb73] font-bold text-lg px-4 py-2 rounded-lg
                     transition-all duration-300 ease-in-out cursor-pointer
                     hover:text-green-500 hover:scale-105
                     before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                     before:bg-gradient-to-r before:from-[#03eb73] before:to-green-500
                     before:transition-all before:duration-300
                     hover:before:w-full"
            to="training" 
            duration={500} 
            smooth={true}
          >
            Đào tạo
          </Link>
        </div>

        {/* CTA Button */}
        <div className="ml-4">
          <Link
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2.5 
                     rounded-full font-semibold text-sm
                     transition-all duration-300 ease-in-out cursor-pointer
                     hover:from-green-400 hover:to-green-600 hover:scale-105 hover:shadow-lg
                     shadow-cyan-500/25"
            to="contact" 
            duration={500} 
            smooth={true}
          >
            Liên hệ
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;