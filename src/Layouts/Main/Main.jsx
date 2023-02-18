import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";

const Main = () => {
   return (
      <div className="grid grid-cols-12">
         <div className="col-span-3">
            <SideBar />
         </div>
         <div className="col-span-9">
            <Outlet />
         </div>
      </div>
   );
};

export default Main;
