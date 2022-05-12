const MyWork = () => {
  return (
    <div className="flex flex-col items-center md:m-16 md:mt-24">
      <div className="flex flex-col items-center md:m-16">
        <h1 className="text-3xl">My Work</h1>
      </div>
      <div className="flex flex-col justify-around m-16 font-light md:mx-0 md:flex-row">
        <div className="flex flex-col justify-between h-64 mb-12 md:w-1/3">
          <p>
            This section is currently a work in progress. As I complete more
            websites and projects I will update this section. Check back later
            to see my best work.
          </p>
          <p>
            My website is updated far less regularly than my twitter. For more
            info about what I am up to be sure to check it out.
          </p>
          <a
            href="https://twitter.com/dperkinsdev"
            className="p-3 font-normal bg-green-400 rounded-xl w-max"
          >
            Twitter
          </a>
        </div>
        <div className="flex flex-col justify-between h-64 md:w-1/3">
          <p>
            My work also gets posted on github. If you would like to see my
            source code or just take a look behind the scenes you can see it
            below (no sign up required).
          </p>
          <p>
            Github allows me to backup my work that I do for clients so that if
            you change your mind and want to go back to a previous version, you
            can.
          </p>
          <a
            href="https://github.com/Daniel-Perkins"
            className="p-3 font-normal bg-green-400 rounded-xl w-max"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
