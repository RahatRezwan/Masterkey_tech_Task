import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeSideBar = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      axios.get("products.json").then((res) => {
         setProducts(res.data.products);
      });
   }, []);

   return (
      <div>
         <div className="flex justify-between">
            <h1>Daily Deals</h1>
            <p>View All</p>
         </div>

         <div>
            {products.map((product) => (
               <div className="flex justify-between p-1">
                  <div className="flex gap-1">
                     <img
                        src={product.picture}
                        alt=""
                        className="w-[48px] h-[48px] mx-auto mb-5 bg-slate-200 rounded-full"
                     />
                     <div>
                        <h1 className="text-lg font-semibold">{product.name}</h1>
                        <p className="text-sm">256 Review And 1150 Order</p>
                     </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-500">Price: ${product.price}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default HomeSideBar;
