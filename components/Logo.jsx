import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className=" lg:flex">
      <Link href="/">
        <Image
          className=" h-6 w-auto="
          src="../public/logo.svg"
          alt="Logo"
          width={100}
          height={24}
          priority
        ></Image>
      </Link>
    </div>
  );
};

export default Logo;
