import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold1623: "font-poppins font-semibold",
  txtPoppinsRegular20Black900: "font-normal font-poppins",
  txtOpenSansRomanBold70: "font-bold font-opensans",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular1662: "font-normal font-poppins",
  txtPoppinsSemiBold18WhiteA700: "font-poppins font-semibold",
  txtOpenSansRomanRegular16Gray900cc: "font-normal font-opensans",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtOpenSansRomanBold36: "font-bold font-opensans",
  txtTinosBold52: "font-bold font-tinos",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtOpenSansRomanBold52: "font-bold font-opensans",
  txtPoppinsLightItalic30: "font-light font-poppins italic",
  txtOpenSansRomanBold70Gray902: "font-bold font-opensans",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtOpenSansRomanBold80: "font-bold font-opensans",
  txtOpenSansRomanRegular16Red400: "font-normal font-opensans",
  txtPoppinsSemiBold25Black900: "font-poppins font-semibold",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtTinosBold52Gray900: "font-bold font-tinos",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular1299: "font-normal font-poppins",
  txtPoppinsRegular20Gray300: "font-normal font-poppins",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsMedium25: "font-medium font-poppins",
  txtTinosBold80: "font-bold font-tinos",
  txtPoppinsRegular20Gray500: "font-normal font-poppins",
  txtPoppinsRegular20Gray301: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular14Gray301: "font-normal font-poppins",
  txtPoppinsRegular40: "font-normal font-poppins",
  txtPoppinsSemiBold25Red400: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular25Gray501: "font-normal font-poppins",
  txtPoppinsRegular20Gray802: "font-normal font-poppins",
  txtPoppinsSemiBold25WhiteA700: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
