import React from "react";

import Check_icon from "../../../../img/icon/check_icon";
import Star_icon from "../../../../img/icon/star_sm";
import Shopping_Bag_icon from "../../../../img/icon/shopping_bag";

const bnt_size = "w-8 h-8 rounded-full";
const bnt_style = "w-10 h-10 shadow-lg capitalize font-bold ";

const Item = () => {
  return (
    <React.Fragment>
      <div className=" flex justify-between items-center px-8 pt-10 space-x-5 ">
        <div className="grid grid-cols-1 gap-5 ">
          <button
            type="button"
            className={`${bnt_size} bg-pink-500 text-white p-1.5`}
          >
            <Check_icon />
          </button>
          <button type="button" className={`${bnt_size} bg-red-700 `}></button>
          <button
            type="button"
            className={`${bnt_size} bg-green-700 `}
          ></button>
        </div>
        <div className="flex-grow ">
          <img
            src="../../../../img/bag/bagDetail.svg"
            className="mx-auto w-50 h-80"
          />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <button
            type="button"
            className={`${bnt_size} ${bnt_style} text-text_menu`}
          >
            s
          </button>
          <button
            type="button"
            className={`${bnt_size}  ${bnt_style} text-pink-500`}
          >
            m
          </button>
          <button
            type="button"
            className={`${bnt_size}  ${bnt_style} text-text_menu`}
          >
            l
          </button>
        </div>
      </div>
      <div className="px-8 space-y-10 mb-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-5">
            <h2 className="text-4xl leading-normal capitalize font-semibold">
              elegant bag
            </h2>
            <button
              type="button"
              className="flex items-center shadow  px-3 rounded-lg w-16"
            >
              <Star_icon width="30" height="30" />
              <span>4.5</span>
            </button>
          </div>
          <p className="text-lg">2020hot handbags new fashion </p>
        </div>

        <div className="space-y-2">
          <h3 className="capitalize text-2xl font-semibold ">descriptioin</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div>
          <p className="text-5xl flex items-center font-medium">
            $299.99
            <span className="text-sm line-through  ml-3">$499.90</span>
          </p>
        </div>
        <button
          type="button"
          className="flex justify-center items-center w-full p-5 bg-bg_bntPink500 rounded-full space-x-5"
        >
          <span className="capitalize text-white text-xl">add to cart </span>{" "}
          <Shopping_Bag_icon />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Item;
