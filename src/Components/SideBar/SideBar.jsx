import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/icons/cart.png";
import contactus from "../../assets/icons/contactus.png";
import explore from "../../assets/icons/explore.png";
import history from "../../assets/icons/history.png";
import home from "../../assets/icons/home.png";
import profile from "../../assets/icons/profile.png";
import saved from "../../assets/icons/saved.png";
import selling from "../../assets/icons/selling.png";
import settings from "../../assets/icons/settings.png";
import logo from "../../assets/Logo/Logo.png";
import customerService from "../../assets/customerService.png";

const SideBar = () => {
   const menus = [
      { name: "Home", path: "/", icon: home },
      { name: "Explore", path: "/explore", icon: explore },
      { name: "Saved", path: "/saved", icon: saved },
      { name: "Cart", path: "/cart", icon: cart },
      { name: "Selling", path: "/selling", icon: selling },
      { name: "Profile", path: "/profile", icon: profile },
      { name: "History", path: "/history", icon: history },
      { name: "Contact Us", path: "/contact-us", icon: contactus },
      { name: "Settings", path: "/settings", icon: settings },
   ];
   return (
      <div className="min-h-screen shadow-lg">
         <div className="flex gap-4 justify-center items-center mt-[32px] mb-[73px]">
            <img src={logo} alt="" />
            <h4>Mk Sounds</h4>
         </div>

         <ul className="flex flex-col items-start gap-11">
            {menus.map((menu, i) => (
               <li key={i} className="ml-6">
                  <Link to={menu.path} className="flex gap-8 justify-start items-start">
                     <img src={menu.icon} alt="" />
                     <p>{menu.name}</p>
                  </Link>
               </li>
            ))}
         </ul>

         <div className="mt-[51px]">
            <img src={customerService} alt="" />
         </div>
      </div>
   );
};

export default SideBar;
