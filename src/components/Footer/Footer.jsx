import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <section className=" bottom-0 right-0 left-0 overflow-hidden py-8 bg-gray-400  border-t-2 border-t-black">
      <div className=" mx-auto max-w-7xl px-4">
        <div className="">
          <div className="w-full  md:w-1/2 lg:w-5/12">
            <div>
              <p className="text-sm text-gray-600">
                &copy; Copyright 2024. All Rights Reserved by
                <Link
                  to="https://zubairshabir.info/"
                  className="hover:text-gray-800 px-2"
                  target="_blank"
                >
                  Zubair Shabir
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
