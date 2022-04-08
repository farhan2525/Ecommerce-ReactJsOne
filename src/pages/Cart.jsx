import { Announcement } from "@mui/icons-material";
import React from "react";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

function Cart() {
  return (
    <div>
      <Announcement />
      <Navbar />

      <div className="p-5">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3">
            <p>Items in your Cart : 3</p>
            <p className="ml-5">Whitlist Items: 0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>
        {/* Centeral Div */}
        <div className="flex mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1 bf-blue-200">
            {/* list of products div */}
            <div className="flex w-[100%] h-auto items-center  mobile:flex-col">
              <div className="product_img flex self-start pl-5">
                <img
                  className="w-[7.25rem] h-[80%] rounded-xl shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product-img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between ">
                  <p>
                    <b className="mr-2">ID:</b> 123456878{" "}
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> dazing Sky Shirt
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>{" "}
                    <div className="rounded-full border-2 p-[10px] cursor-pointer  ml-1 w-[]20px] h-[20px]"></div>{" "}
                  </p>
                  <p>
                    <b className="mr-2">Size:</b> large
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto mobile:mt-3">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70$</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />

            {/* Second product */}

            <div className="flex w-[100%] h-auto items-center  mobile:flex-col">
              <div className="product_img flex self-start pl-5 ">
                <img
                  className="w-[7.25rem] h-[80%] rounded-xl shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product-img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between ">
                  <p>
                    <b className="mr-2">ID:</b> 123456878{" "}
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> dazing Sky Shirt
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>{" "}
                    <div className="rounded-full border-2 p-[10px] cursor-pointer ml-1 w-[]20px] h-[20px]"></div>{" "}
                  </p>
                  <p>
                    <b className="mr-2">Size:</b> large
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto mobile:mt-3">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>70$</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className='p-5 flex flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex-col items-center'>
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping Discount</p>
              <p>-$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] tex-3xl text-bold">
              <p>Total</p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Cart;
