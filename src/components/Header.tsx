const Header = () => {
  return (
    <div className="flex flex-col items-center my-40">
      <div className="flex items-center justify-around w-full">
        <div className="flex flex-col items-center justify-between h-64">
          <h1 className="font-light text-8xl">
            DAN
            <br />
            PERKINS
          </h1>
          <h3 className="text-3xl font-light">Frontend Developer</h3>
        </div>
        <img src="portrait.png" alt="Portrait" className="h-72" />
      </div>
      <a href="/" className="p-3 bg-green-400 mt-28 rounded-xl">
        Get In Touch
      </a>
    </div>
  );
};

export default Header;
