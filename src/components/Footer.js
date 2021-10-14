import React from "react";

export const Footer = () => {
  const currYear = new Date().getFullYear();
  return <div className="footer">Made by &copy; TEAM EXTREME {currYear}</div>;
};

// export default Footer
