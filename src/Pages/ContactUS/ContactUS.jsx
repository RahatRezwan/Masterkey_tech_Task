import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
const ContactUS = () => {
   const teams = [
      { name: "Robert MCGRATH", details: "CFounder", img: image1 },
      { name: "MICHELLE MAGER", details: "Marketing Head", img: image2 },
      { name: "Paul Carter", details: "Support Manager", img: image3 },
   ];

   return (
      <div className="text-center">
         <h1 className="text-4xl mb-[100px]">Awesome Teams</h1>

         <div className="flex justify-between bg-yellow-400 relative">
            {teams.map((team) => (
               <div className="z-30 p-3">
                  <img src={team.img} alt="" className="mt-[-72px] h-[250px]" />
                  <h1>{team.name}</h1>
                  <h1>{team.details}</h1>
                  <div></div>
                  <div className="flex gap-3 justify-center mt-3">
                     <FaFacebook className=" p-2 rounded-full bg-white  text-4xl" />
                     <FaTwitter className=" p-2 rounded-full bg-white  text-4xl" />
                     <FaPinterest className=" p-2 rounded-full bg-white  text-4xl" />
                  </div>
               </div>
            ))}
            <div className="bg-gray-400 absolute bottom-0 h-[110px] w-full"></div>
         </div>
      </div>
   );
};

export default ContactUS;
