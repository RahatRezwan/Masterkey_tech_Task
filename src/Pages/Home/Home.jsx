import React from "react";
import serch from "../../assets/icons/serch.png";
import filter from "../../assets/icons/filter.png";
import Message from "../../assets/icons/Message.png";
import notification from "../../assets/icons/notification.png";
import user from "../../assets/icons/user.png";
import YellowStars from "../../assets/icons/YellowStars.png";
import HeadPhone from "../../assets/HeadPhone.png";
import colors from "../../assets/colors.png";
import smallbanner from "../../assets/smallbanner.png";
import Products from "../../Components/Products/Products";
import HomeSideBar from "../../Components/HomeSideBar/HomeSideBar";
import Categories from "../../Components/Categories/Categories";
const Home = () => {
   return (
      <div className="mx-[37px]">
         {/* Home Page Header */}
         <header className="flex justify-between items-center">
            <div className="text-center">
               <h1>Headphone</h1>
               <p>For the top brand</p>
            </div>
            <div className="flex gap-7">
               <div className="flex shadow-lg gap-2 items-center rounded-[10px] p-3">
                  <div className="flex justify-center items-center">
                     <img src={serch} alt="" className="w-[28px] h-[28px]" />
                  </div>
                  <input type="text" placeholder="Search Product" className="" />
                  <div className="flex justify-center items-center">
                     <img src={filter} alt="" className="w-[39px] h-[34px]" />
                  </div>
               </div>
               <div className="flex gap-[18px]">
                  <img src={Message} alt="" />
                  <img src={notification} alt="" />
                  <img src={user} alt="" />
               </div>
            </div>
         </header>

         {/* Home page banner */}
         <div className="flex gap-10 mt-6">
            <div className="flex justify-center items-center shadow-xl rounded-[10px]">
               <img src={HeadPhone} alt="" />
               <div>
                  <div className="mb-3">
                     <h1 className="text-xl font-semibold">Beats Studio3 Wireless Headphone</h1>
                     <div className="flex gap-3">
                        <img src={YellowStars} alt="" />
                        <p>(200+ Reviews)</p>
                     </div>
                  </div>

                  <p className="text-[16px] mb-2">
                     Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi
                     crip & Closs{" "}
                  </p>
                  <p className="text-[#07FFD2]">Price $450.55</p>
                  <p className="flex gap-2 items-center font-semibold text-lg">
                     Color: <img src={colors} alt="" />
                  </p>
               </div>
            </div>
            <img src={smallbanner} alt="" className="w-[358px] h-[212px]" />
         </div>

         {/* Home Page Body */}
         <div className="flex mt-[20px]">
            <div className="w-[80%]">
               <Products />
               <Categories />
            </div>
            <HomeSideBar />
         </div>
      </div>
   );
};

export default Home;
