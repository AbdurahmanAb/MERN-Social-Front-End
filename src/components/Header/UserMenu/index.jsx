import React from "react";

const UserMenu = () => {
  return (
    <div className="user bg-white w-1/4 p-6 z-10 right-1  z-50 top-15 rounded -my-2  ">
      <div className="user__name ">
        <figure className="flex items-center gap-2 border-b-2 border-solid p-2">
          <img
            src="./assets/stories/1.jpg"
            alt=""
            className="h-20 w-20 rounded-full"
          />
          <figcaption>
            <h3 className="font-bold">Abdu Ab</h3>
            <p className="font-serif text-1xl ">visit your profile</p>
          </figcaption>
        </figure>
      </div>
      <ul className="user__list mt-9">
        <li className="user__item flex items-center gap-3 border-b-2 border-solid w-full pb-4 ">
          <div className="circle h-9 w-9 bg-slate-200 rounded-full flex items-center justify-center">
            <i className="report_filled_icon "></i>
          </div>
          <div className="user__text">
            <h2 className="font-bold">Give Feedback</h2>
            <p className="font-light text-gray-600">help us Improve Facebook</p>
          </div>
        </li>
        <li className="user__item flex items-center gap-3 mt-10 hover:bg-gray-100 p-3 rounded">
          <div className="circle h-9 w-9 bg-slate-200 rounded-full flex items-center justify-center">
            <i className="settings_filled_icon "></i>
          </div>
          <div className="user__text flex items-center gap-20 ">
            <h2 className="font-bold text-xl">Setting And Privacy</h2>

            <i className="right_icon"> </i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
