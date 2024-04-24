import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#E8E9EB] flex justify-around">
        <div className="flex flex-col gap-4 py-8">
          <div className="flex justify-start items-start gap-2">
            {/* <img className="relative bottom-3" src="/images/logo.png" /> */}
            <p className="roboto-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F15858] to-[#F67E4F]">
              Nthusiast
            </p>
          </div>
          <div className="flex flex-col gap-0">
            <p className="roboto-regular text-lg">About Us</p>
            <p className="roboto-regular text-lg">Get in touch</p>
            <p className="roboto-regular text-lg">Solutions</p>
            <p className="roboto-regular text-lg">Features</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8">
          <div className="flex justify-center items-center gap-2">
            <p className="roboto-bold text-2xl">Support</p>
          </div>
          <div className="flex flex-col gap-0">
            <p className="roboto-regular text-lg">Email</p>
            <p className="roboto-regular text-lg">Phone</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8">
          <div className="flex justify-start items-center gap-2">
            <p className="roboto-bold text-2xl">Legal</p>
          </div>
          <div className="flex flex-col gap-0">
            <p className="roboto-regular text-lg">Privacy Policy</p>
            <p className="roboto-regular text-lg">Terms of Service</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
