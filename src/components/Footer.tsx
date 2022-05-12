import { FaGithub, FaTwitter, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-around h-32 mt-32 bg-slate-500">
      <div>
        <p>Email: danperkinscs@gmail.com</p>
        <p className="font-light">
          Send me an email and I will get back to you with a quote
        </p>
      </div>
      <div className="flex">
        <a href="/" className="p-2">
          <FaMailBulk className="w-5 h-5" />
        </a>
        <a href="/" className="p-2">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="/" className="p-2">
          <FaTwitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
