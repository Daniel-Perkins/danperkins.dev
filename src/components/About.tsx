const About = () => {
  return (
    <div className="flex flex-col items-center m-16">
      <div className="flex flex-col items-center m-16">
        <h1 className="text-3xl">Websites For Local Businesses</h1>
        <h3>Tailored to reduce hassle with budgets in mind</h3>
      </div>
      <div className="grid grid-cols-3 gap-20 font-light">
        <div>
          <h4 className="mb-3 text-xl">Time</h4>
          <p>
            Static sites made in a couple of days to get your business online
            and ready as soon as possible. Regularly communicating with the
            client to make adjustments
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xl">Tools</h4>
          <p>
            Coded websites are far more customisable than website builders,
            allowing me to tailor your site best for your business’ needs
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xl">Deployment</h4>
          <p>
            I host websites with Netlify which allows for free hosting with the
            scale of a small business. To find out about netlify{" "}
            <a
              href="https://netlify.com/"
              className="underline decoration-sky-500 text-sky-500"
            >
              click here
            </a>
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xl">Setup</h4>
          <p>
            I can walk you through website setup or I can manage all of the
            aspects of your website at a very affordable price and keep the
            design of your website updated for you
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xl">Domains</h4>
          <p>
            I can help you find the best domain possible at the best price. A
            good domain greatly increases discoverability for your business.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xl">Tailwind CSS</h4>
          <p>
            I use a tool that allows for website creation on the fly, far faster
            than traditional CSS styling with zero compromises
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
