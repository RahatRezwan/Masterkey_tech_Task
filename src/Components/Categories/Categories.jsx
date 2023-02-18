import React from "react";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";

const Categories = () => {
   const categories = [
      { name: "Popular top 10 brands", details: "$400+ Orders & reviews", img: cat1 },
      { name: "New Sellers", details: "$460+ Orders & reviews", img: cat2 },
   ];
   return (
      <div className="mt-20 w-full">
         <h1 className="text-2xl font-bold text-[#66FF1E]">
            Explore The Popular Categories{"  "}
            <span className="text-lg font-normal text-black">See all</span>
         </h1>

         <div className="flex gap-5 w-full">
            {categories.map((category, i) => (
               <div className="flex justify-between items-center p-4 rounded-md shadow-lg">
                  <img src={category.img} alt="" />

                  <div>
                     <h1>{category.name}</h1>
                     <h1>{category.details}</h1>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Categories;
