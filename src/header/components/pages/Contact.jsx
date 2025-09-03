import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-[#58595B] h-[361px] w-full">
        <div className=" flex h-[180px] "></div>
        <div className=" flex flex-col justify-center items-center gap-8  ">
          <div className="w-[108px] h-[37px] rounded-[50px] bg-[#FFFFFF1A] flex items-center justify-center">
            <h3 className="font-archivo font-normal text-[16px] leading-[100%] tracking-[0%] text-center text-[#ffffff]">
              Contact
            </h3>
          </div>

          <div className="flex ">
            <h1 className="font-archivo font-bold text-[48px] leading-[100%] tracking-[0%] text-center">
              We’re here to help!
            </h1>
          </div>
        </div>
      </div>

      <section className="flex justify-center w-[100%] bg-[green]">
        <div className="w-[87%] flex justify-between   bg-[yellow]">
          <div className="w-[40%] h-[500px] bg-[red] ">
            <div className="flex flex-col gap-[24px] ">
              <h1 className="font-archivo font-bold text-[40px] leading-[100%] tracking-[0%] ">
                Let’s Work Together
              </h1>
              <p className="font-archivo font-normal text-[20px] leading-[26px] tracking-[0%] h-max-[43.4167%]">
                Get in touch with our team of financial experts to receive
                tailored advice and solutions. Whether you're looking to secure
                funding, scale your business, or maximize exit opportunities,
                we're here to guide you.
              </p>
            </div>
          </div>
          <div className="w-[40%] h-[500px] bg-[blue]">
            <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
              <div className="w-full max-w-lg bg-white shadow-md rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full border rounded-md p-2"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full border rounded-md p-2"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border rounded-md p-2"
                  />

                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full border rounded-md p-2"
                  />

                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    className="w-full border rounded-md p-2"/>

                  <textarea
                    placeholder="Message"
                    className="w-full border rounded-md p-2 h-24"
                  ></textarea>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="agree" />
                    <label htmlFor="agree" className="text-sm text-gray-600">
                      You agree to our friendly
                      <a href="#" className="text-blue-500">
                        privacy policy
                      </a>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w w-full bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-xl"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
