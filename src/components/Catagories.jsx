import React from "react";
import {ApiCategories} from "../apifolder/CatagoriesApi";
import Catagory from "./Catagory";

function Catagories() {
  return (
    <div className="flex justify-between items-center p-5 mobile:flex-col">
      {ApiCategories.map((Category, index) => {
        return <Catagory item={Category} key={index} />
      })}
    </div>
  );
}

export default Catagories;
