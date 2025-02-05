import twitter from "../Logo/twitter-x-logo.png";
import insta from "../Logo/instagram.png";0
import github from '../Logo/Github.png'
function Footer() {
  return (
    <>
      <div class="string Anime">
        <svg width="100%" height="100">
          <path
            d="M 1 100 Q 680 100 1350 100"
            stroke="white"
            strokeWidth="7"
            fill="transparent"
          />
        </svg>
      </div>
      <div className="w-full md:w-1/2 m-5 p-5 text-[#fff]">
        <h4 className="font-bold mb-2 text-5xl">Connect with Us</h4>
        <p className="font-bold text-2xl py-4">
          Email:{" "}
          <a
            href="mailto:mayankroy106106@gmail.com"
            className="hover:underline text-[#fff]"
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
            <p className="font-bold text-lg">Twitter</p>
          </a>
          <a
            href="https://www.instagram.com/code__mancer/"
            target="instagram"
            className="flex space-x-2"
          >
            <img src={insta} alt="Instagram" className="h-7 w-7" />
            <p className="font-bold text-lg">Instagram</p>
          </a>
          <a
            href="https://github.com/DATBOI-MAYANK"
            target="twitter"
            className="flex space-x-2"
          >
            <img src={github} alt="Twitter" className="h-7 w-7" />
            <p className="font-bold text-lg">Github</p>
          </a>
          {/* <!-- Add other social icons as needed --> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
