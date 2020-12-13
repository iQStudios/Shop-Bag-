import React from "react";

import Notification_icon from "../../../../img/icon/notification";
import Search_icon from "../../../../img/icon/search_icon";
import Search_icon_menu from "../../../../img/icon/search_menu";

export default function HomeTop() {
  return (
    <div className="bg-pink_500  h-auto w-full rounded-b-home_bg_custom p-5 pb-8 grid gap-10">
      <div className="flex justify-between items-center">
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          className=" w-16 h-16 object-cover rounded-full ring-2"
        />
        <div className="capitalize mr-auto ml-3 text-sm font-semibold">
          <h2>Hi Acacia,</h2>
          <p>find your favorite items</p>
        </div>
        <div className="relative">
          <span className="bg-red-500 absolute text-center text-sm text-white px-2 rounded-full top-0 right-0">
            1
          </span>
          <div className="p-2">
            <button
              type="button"
              className="w-12 h-12 rounded-2xl p-2.5 shadow-xl bg-white focus:outline-none"
            >
              <Notification_icon />
            </button>
          </div>
        </div>
      </div>
      {/*Search*/}
      <div className="bg-white flex justify-between h-auto py-2 px-6 items-center space-x-3 rounded-xl shadow-md">
        <div>
          <Search_icon />
        </div>
        <input
          type="text"
          className="flex-1 h-8 focus:outline-none"
          placeholder="Search..."
        />
        <button type="button" className="">
          <Search_icon_menu />
        </button>
      </div>
    </div>
  );
}
