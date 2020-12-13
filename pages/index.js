import React from "react";

import Head from "next/head";
import LayoutHome from "../public/components/Layout/Home/index";

const HomeIndex = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Welcome to Shop Bag!</title>
      </Head>
      <LayoutHome></LayoutHome>
    </React.Fragment>
  );
};

export default HomeIndex;
