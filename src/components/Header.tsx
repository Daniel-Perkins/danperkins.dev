const Header = () => {
  return (
    <div className="flex flex-col items-center mb-32 md:my-40">
      <div className="flex flex-col items-center justify-around w-full md:flex-row">
        <div className="flex flex-col items-center justify-between p-2 mb-12 h-max md:h-64 md:mb-0">
          <h1 className="mb-6 text-6xl font-light md:text-8xl md:mb-0">
            DAN
            <br />
            PERKINS
          </h1>
          <h3 className="text-3xl font-light">Frontend Developer</h3>
        </div>
        <img src="portrait.png" alt="Portrait" className="h-72" />
      </div>
      <a href="#contact" className="p-3 bg-green-400 mt-28 rounded-xl">
        Get In Touch
      </a>
    </div>
  );
};

export default Header;
