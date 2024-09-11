import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import header from "../assets/header.png"

const Header = () => {
    return (
      <div className="border-b-2 bg-yellow-300 border-b-black py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-black"
            >
              <img src={header} className="w-full max-h-[80px] object-cover" />
            </Link>
            <div className = "md:hidden">
                <MobileNav/>
            </div>
            <div className = "hidden md:block">
                <MainNav/>
            </div>

        </div>
      </div>
    );
  };
  
  export default Header;