import React from "react";
import { Button, Img, Text } from "components"; // Make sure to adjust this import path

const Footer = (props) => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .flex-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <footer className={`${props.className}`}>
        <div className="flex flex-col items-center justify-center mb-[76px] mt-[70px] mx-auto w-[78%]">

          <div className="flex flex-row flex-wrap items-center justify-between w-full flex-container">

            <div className="flex flex-col items-start">
              <Text className="sm:text-[21px] md:text-[23px] text-[25px] text-red-400" size="txtPoppinsSemiBold25Red400">
                Get in touch
              </Text>
              <Text className="leading-[153.00%] mt-[10px] text-gray-300 text-xl" size="txtPoppinsRegular20Gray300">
                Tajura, Algamodi street
              </Text>
              <Text className="mt-[10px] text-gray-300 text-xl" size="txtPoppinsRegular20Gray300">
                caffebros@tajmedia.com
              </Text>
              <Text className="mt-[10px] text-gray-300 text-xl" size="txtPoppinsRegular20Gray300">
                218-924871520+
              </Text>
            </div>

               <div className="flex flex-row items-center flex-wrap pt-[30px]">
              <Text className="bg-red-400 flex h-[51px] items-center justify-center rounded-[50%] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-[51px]" size="txtPoppinsSemiBold25WhiteA700">
                B
              </Text>
              <Text className="ml-[10px] text-lg text-white-A700" size="txtPoppinsSemiBold18WhiteA700">
                <span className="text-red-400 font-poppins text-left font-semibold">.</span>
                <span className="text-white-A700 font-poppins text-left font-semibold">BrosCafe</span>
              </Text>
            </div>

            <div className="flex flex-row gap-[30px] items-center flex-wrap pt-[30px]">
  <Button className="bg-bluegray-100 flex h-[60px] items-center justify-center p-[15px] rounded-[50%] w-[60px]">
    <Img className="h-[30px]" src="images/img_instagram.png" alt="Instagram" />
  </Button>
  <Button className="bg-bluegray-100 flex h-[60px] items-center justify-center p-[15px] rounded-[50%] w-[60px]">
    <Img className="h-[30px]" src="images/img_facebook.png" alt="Facebook" />
  </Button>
</div>


         

          </div>

          <div className="flex flex-row items-center justify-center mt-10 w-full">
            <Text className="text-gray-301 text-xl pl-[10px]" size="txtPoppinsRegular20Gray301">2023</Text>
            <Text className="ml-[5px] text-gray-301 text-xl" size="txtPoppinsRegular20Gray301">TajMedia</Text>
            <Text className="ml-[5px] text-gray-301 text-sm border-[1.5px] border-gray-301 border-solid rounded-[50%] h-[19px] w-[19px] items-center justify-center" size="txtPoppinsRegular14Gray301">c</Text>
            <Text className="ml-[5px] text-gray-301 text-xl" size="txtPoppinsRegular20Gray301">All Rights Reserved</Text>
          </div>

        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  className: "bg-gray-901 flex items-center justify-center md:px-5 w-full",
};

export default Footer;
