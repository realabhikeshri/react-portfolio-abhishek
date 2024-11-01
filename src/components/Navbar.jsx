import logo from "../assets/logoak.png"
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10 rounded" src={logo} alt="logo" />
        </div>
        <div className = "m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/abhishek-keshri-bitmesra/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/realabhikeshri" target="_blank"><FaGithub /></a>
            <a href="https://x.com/real_abhikeshri" target="_blank"><FaTwitter /></a>
            <a href="https://www.instagram.com/abhi_bhi_keshri/" target="_blank"><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar;
