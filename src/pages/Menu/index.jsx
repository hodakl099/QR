import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";
import { useTranslation } from 'react-i18next';
import { Category } from './models';
import { fetchCategoriesByRestaurant } from "models/api";

const MenuPage = () => {
  const navigate = useNavigate();
  
  const { t } = useTranslation();

  const restaurantId = 1;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCategoriesByRestaurant(restaurantId);
        const data = response.data.map(
          cat => new Category(cat.id, cat.name, cat.imageUrl, cat.objectName, cat.subCategories, cat.restaurantId)
        );
        setCategories(data);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchData();
  }, [restaurantId]);
  
 
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              className="h-[51px] w-[12%]"
              src="images/img_logo.svg"
              alt="Logo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start ml-8 sm:ml-[0] w-[9%] sm:w-full">
                <Text
                  className="text-base text-red-400"
                  size="txtOpenSansRomanRegular16Red400"
                >
                    {t('Home.hello')}
                </Text>
                <Line className="bg-red-400 h-px w-full" />
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </Text>
              </div>
            </div>
            <Button
              className="bg-white-A700 cursor-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[122px] rounded-[50%] w-[50px]"
              leftIcon={
                <Img
                  className="h-6 m-[13px]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              }
            ></Button>
            <Button className="bg-red-400 cursor-pointer font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] py-3.5 rounded-[16px] text-center text-sm text-white-A700">
              Log in
            </Button>
          </div>
          <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Our Popular Menu
            </Text>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
                <Button className="bg-red-400 cursor-pointer font-semibold min-w-[232px] py-[26px] rounded-[16px] text-center text-white-A700 text-xl">
                  All catagory
                </Button>
                <Button className="bg-gray-400_63 cursor-pointer min-w-[192px] py-[27px] rounded-[16px] text-center text-gray-900 text-xl">
                  Dinner
                </Button>
                <Button className="bg-gray-400_63 cursor-pointer min-w-[192px] py-[27px] rounded-[16px] text-center text-gray-900 text-xl">
                  Lunch
                </Button>
                <Button className="bg-gray-400_63 cursor-pointer min-w-[192px] py-[27px] rounded-[16px] text-center text-gray-900 text-xl">
                  Dessert
                </Button>
                <Button className="bg-gray-400_63 cursor-pointer min-w-[192px] py-[27px] rounded-[16px] text-center text-gray-900 text-xl">
                  Drink
                </Button>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
                  <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                     <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
        <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
          {/* Dynamically render category buttons */}
          {categories.map((category) => (
            <Button
              key={category.id}
              className="bg-gray-400_63 cursor-pointer min-w-[192px] py-[27px] rounded-[16px] text-center text-gray-900 text-xl"
            >
              {category.name}
            </Button>
          ))}
        </div>
        {/* ...Existing Code for displaying menu items... */}
      </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem41084.png"
                        alt="PngItem41084"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
                        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Spaghetti
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[158px] py-[19px] rounded-lg text-base text-center text-white-A700"
                            onClick={() => navigate("/checkout")}
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem1447549.png"
                        alt="PngItem1447549"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Gnocchi
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[158px] py-[19px] rounded-lg text-base text-center text-white-A700"
                            onClick={() => navigate("/checkout")}
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngegg.png"
                        alt="pngegg"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Rovioli
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[158px] py-[19px] rounded-lg text-base text-center text-white-A700"
                            onClick={() => navigate("/checkout")}
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[95%]"
                        src="images/img_pngwing.png"
                        alt="pngwing"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-[15px] w-full">
                        <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Penne Alla Vodak
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[158px] py-[19px] rounded-lg text-base text-center text-white-A700"
                            onClick={() => navigate("/checkout")}
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem5290903.png"
                        alt="PngItem5290903"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 pt-3.5 w-full">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Risoto
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[158px] py-[19px] rounded-lg text-base text-center text-white-A700"
                            onClick={() => navigate("/checkout")}
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngwing_270X270.png"
                        alt="pngwing One"
                      />
                      <div className="flex flex-col items-center justify-end mb-1.5 w-full">
                        <div className="flex flex-col gap-[18px] items-center justify-start mt-4 w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Splitza Signature
                          </Text>
                          <Text
                            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="common-pointer bg-red-400 cursor-pointer font-semibold min-w-[158px] py-[19px] rounded-lg text-base text-center text-white-A700"
                            onClick={() => navigate("/checkout")}
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-inter gap-2.5 items-center justify-center w-1/5 md:w-full">
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrowleft"
                  />
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[78%]">
                    <Button className="bg-gray-900 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded text-center text-sm text-white-A700 tracking-[-0.50px] w-[35px]">
                      1
                    </Button>
                    <Button className="bg-gray-200 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded text-black-900 text-center text-sm tracking-[-0.50px] w-[35px]">
                      2
                    </Button>
                    <Button className="bg-gray-200 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded text-black-900 text-center text-sm tracking-[-0.50px] w-[35px]">
                      3
                    </Button>
                    <Button className="bg-gray-200 flex h-[35px] items-center justify-center p-[7px] rounded w-[35px]">
                      <Img
                        className="h-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </Button>
                  </div>
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default MenuPage;
