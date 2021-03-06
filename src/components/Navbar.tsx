import { FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-10 my-5">
      <h1 className="text-xl">Dan Perkins</h1>

      <div className="flex justify-between leading-loose w-36">
        <a href="#contact">Contact</a>
        <div className="flex items-center justify-between w-14">
          <a href="https://github.com/Daniel-Perkins">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/dperkinsdev">
            <FaTwitter className="w-6 h-6 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
