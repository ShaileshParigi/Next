import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>
        <Link href="dashboard" placeholder="this is nav Link">
          <span className="underline">DashBoard</span>
        </Link>
      </div>
      <h1>This is Home Page</h1>
    </>
  );
};

export default page;
