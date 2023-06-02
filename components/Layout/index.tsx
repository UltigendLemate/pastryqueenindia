import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sponsors from "../Sponsors/Sponsors";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className={`w-[100vw] h-full grid gap-10 justify-center items-center bg-white text-black ${props.className}`}>{props.children}</div>
      <Sponsors />
      <Footer />
    </>

  );
};

export default Layout;



