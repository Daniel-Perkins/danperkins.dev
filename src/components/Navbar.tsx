import { FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3">
      <h1 className="text-xl">Dan Perkins</h1>

      <div className="flex justify-between w-36">
        <a href="/">Contact</a>
        <div className="flex items-center justify-between w-14">
          <a href="/">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="/">
            <FaTwitter className="w-6 h-6 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
