import twitter from "../Logo/twitter-x-logo.png";
import insta from "../Logo/instagram.png";
import github from "../Logo/Github.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      
      <div className="w-full border-t-4  border-white bg-[#FF2E63]">
        <div className="w-full md:w-1/2 m-5 p-5 text-[#fff]">
          <h4 className="font-bold mb-2 text-5xl">Connect with Me</h4>
          <p className="font-bold text-2xl py-4">
            Email:{" "}
            <a
              href="mailto:mayankroy106106@gmail.com"
              className="hover:underline hover:text-[#08D9D6] text-[#fff]"
            >
              mayankroy106106@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-2 text-[#fff]">
            <a
              href="https://x.com/Mayank0101010"
              target="twitter"
              className="flex space-x-2"
            >
              <img src={twitter} alt="Twitter" className="h-7 w-7" />
              <p className="font-bold text-lg hover:text-[#08D9D6]">Twitter</p>
            </a>
            <a
              href="https://www.instagram.com/code__mancer/"
              target="instagram"
              className="flex space-x-2"
            >
              <img src={insta} alt="Instagram" className="h-7 w-7" />
              <p className="font-bold text-lg hover:text-[#08D9D6]">Instagram</p>
            </a>
            <a
              href="https://github.com/DATBOI-MAYANK"
              target="twitter"
              className="flex space-x-2"
            >
              <img src={github} alt="Twitter" className="h-7 w-7" />
              <p className="font-bold text-lg hover:text-[#08D9D6]">Github</p>
            </a>
            <Link
              to='/'
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-bold text-lg hover:text-[#08D9D6]"
            >
                Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
