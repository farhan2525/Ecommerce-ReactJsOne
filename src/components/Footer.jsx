import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";

function Footer() {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      {/* Store Infomation */}
      <div className="flex-1 flex flex-col flex-wrap">
        <h1 className="text[25px]">farhanVai2525</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          vel ratione optio quis repellat eos aut expedita. Pariatur maiores
          quas vitae rerum sint dicta, debitis necessitatibus at vero, est
          omnis.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
            <div className={' bg-blue-700 ' + socialStyle }>
                <Facebook></Facebook>
            </div>
            <div className={' bg-orange-500 ' + socialStyle }>
                <Instagram></Instagram>
            </div>
            <div className={' bg-sky-400 ' + socialStyle }>
                <Twitter></Twitter>
            </div>
            <div className={' bg-red-600 ' + socialStyle }>
                <Pinterest></Pinterest>
            </div>
        </div>
      </div>
      {/* Contact Information */}
      <div className="flex-1 flex flex-col p-2">
          <div className="flex m-3">
              <LocationOnOutlined />
              <p className="pl-3">Capital 0f Bangladesh</p>
          </div>
          <div className="flex m-3">
              <LocalPhoneOutlined/>
              <p className="pl-3">+880 1705501211</p>
          </div>
          <div className="flex m-2">
              <EmailOutlined/>
              <p className="pl-3">farhanvai2525@gmail.com</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
