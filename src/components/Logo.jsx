import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <img src="./logo.png" className="w-24" alt="Logo" />
    </div>
  );
};

export default Logo;
