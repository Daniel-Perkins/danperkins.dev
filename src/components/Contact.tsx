import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bq7su59",
        "template_pyfpbt8",
        e.target,
        "8hnNgYnDvqMtSIISE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="flex flex-col items-center m-16">
      <div className="flex flex-col items-center mb-12 md:m-16">
        <h1 className="text-3xl">Contact Me</h1>
      </div>
      <div className="flex flex-col items-center justify-center md:justify-around md:flex-row">
        <div className="md:w-1/3">
          <h3 className="m-2 text-lg underline decoration-green-400 decoration-2">
            How to get in touch:
          </h3>
          <ul className="mb-20 list-disc">
            <li>Email: danperkinscs@gmail.com</li>
            <li>Use the form to quickly send an email to me</li>
            <li>
              DM me on{" "}
              <a
                href="https://twitter.com/dperkinsdev"
                className="underline decoration-sky-500 text-sky-500"
              >
                twitter
              </a>{" "}
              for the fastest response
            </li>
          </ul>
          <p>
            I am always looking for new clients so send me a message and I will
            be sure to fit you in. I will work closely with you to ensure that
            you get the best pricing and the best service.
          </p>
        </div>
        <div className="p-4 mt-10 shadow-2xl md:w-1/3 rounded-xl">
          <form onSubmit={sendEmail}>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full p-2 my-2 border rounded-lg"
            />
            <textarea
              rows={10}
              name="message"
              placeholder="Message"
              className="w-full p-2 my-2 border rounded-lg"
            />
            <input
              type="submit"
              value="Send"
              className="w-full p-2 my-2 bg-green-400 rounded-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
