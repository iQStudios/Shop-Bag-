import React from "react";
import NavigationDetail from "./Navigation/index";
import Item from "./Item/index";

const Detail_Item = () => {
  return (
    <React.Fragment>
      <div className="w-full h-auto   mx-auto rounded-full  ">
        <NavigationDetail />
      </div>
      <Item />
    </React.Fragment>
  );
};

export default Detail_Item;
