import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

function CatagoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      
      <div className="flex flex-col p-5 ">
        <h1 className="text-[30px] ">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
         <div className="flex mobile:flex-col">
         <p>Filyer by</p>
          <select className="ml-3 border-2 border-silver">
            <option selected disabled>
              size
            </option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
          <select className="ml-3 border-2 border-silver mobile:mt-3">
            <option selected disabled>Color</option>
            <option>Yellow</option>
            <option>Blue</option>
            <option>Red</option>
          </select>
         </div>
         <div className="flex">
             <p>Sort by</p>
             <select className="ml-3 border-2 border-silver">
                 <option>Newset (first) </option>
                 <option>oldest (first) </option>
                 <option>Price (Asc) </option>
                 <option>Price (Des) </option>
             </select>
         </div>
        </div>
      </div>

      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default CatagoryPage;
