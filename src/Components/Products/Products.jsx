import axios from "axios";
import React, { useEffect, useState } from "react";
import starGreen from "../../assets/icons/starGreen.png";
import addicon from "../../assets/icons/addicon.png";

const Products = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      axios.get("products.json").then((res) => {
         setProducts(res.data.products);
      });
   }, []);

   return (
      <div className="grid grid-cols-4 gap-2">
         {products.map((product) => (
            <div className="rounded-[15px] shadow-lg p-2">
               <img src={product.picture} alt="" className="w-[121px] h-[121px] mx-auto mb-5" />
               <h1 className="text-2xl font-semibold">{product.name}</h1>
               <p className="text-[22px] font-semibold text-gray-500">Price: ${product.price}</p>
               <div className="flex justify-between">
                  <div className="flex gap-1">
                     <img src={starGreen} alt="" />
                     <p className="text-lg text-[#38FF4C]">{product.ratting}</p>
                  </div>
                  <div className="w-[32px] h-[32px] rounded-full bg-[#38FF4C]">
                     <img src={addicon} alt="" />
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Products;
