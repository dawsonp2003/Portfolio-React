import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div className="mt-10">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Template from{" "}
        <Link href="http://www.chetanverma.com">Chetan Verma</Link>
        {" | "}Edited by Dawson
      </h1>
    </>
  );
};

export default Footer;
