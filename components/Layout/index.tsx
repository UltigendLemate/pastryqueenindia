import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sponsors from "../Sponsors";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className={`  grid gap-20 justify-center items-center bg-white text-black ${props.className}`}>{props.children}</div>
      
      <Footer />
    </>

  );
};

export default Layout;



