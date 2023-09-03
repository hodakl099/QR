import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";
import { useTranslation } from 'react-i18next';
import { SubCategory } from '../../models/models';
import { fetchSubCategoriesByCategory } from "../../models/api";
import { useParams } from 'react-router-dom';

const SubMenu = () => {

  const [subCategories, setSubCategories] = useState([]);
  const { categoryId,catName } = useParams();

  const navigate = useNavigate();
  
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSubCategoriesByCategory(categoryId);
        // Map the response to your model (if you are using one)
      const data =  response.data.map(
          subCat => new SubCategory(subCat.id,subCat.name,subCat.imageUrl,subCat.objectName,subCat.categoryId,subCat.price)
        )
        setSubCategories(data)
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };
  
    fetchData();
  }, [categoryId]);
 
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start ml-8 sm:ml-[0] w-[9%] sm:w-full">
                <Text
                  className="text-base text-red-400"
                  size="txtOpenSansRomanRegular16Red400"
                  onClick={() => navigate("/")}
                >

                    {t('Home.home')}
                </Text>
                <Line className="bg-red-400 h-px w-full" />
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/contact")}
                >
                  {t('Contact.contact')}
                </Text>
              </div>
            </div>
            {/* <Button
              className="bg-white-A700 cursor-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[122px] rounded-[50%] w-[50px]"
              leftIcon={
                <Img
                  className="h-6 m-[13px]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              }
            ></Button> */}
              <div className="flex flex-row items-center">
              <Text
                className="bg-red-400 flex h-[51px] items-center justify-center rounded-[50%] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-[51px]"
                size="txtPoppinsSemiBold25WhiteA700"
              >
                B
              </Text>
              <Text
                className="ml-[10px] text-lg text-white-A700"
                size="txtPoppinsSemiBold18WhiteA700"
              >
                <span className="text-red-400 font-poppins text-left font-semibold">
                  .
                </span>
                <span style={{ color: 'black' }} className="font-poppins text-left font-semibold">
  Bross Caffe
</span>

              </Text>
            </div>
          </div>
          <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              {catName}
            </Text>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
                  <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {subCategories.map((subCategory) => (
    <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full" key={subCategory.id}>
      <Img
        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
        src={subCategory.imageUrl}
        alt={subCategory.name}
      />
      <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
            size="txtPoppinsSemiBold30"
          >
            {subCategory.name}
          </Text>
        </div>

        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
  <Text
    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 pt-[10px]" 
    size="txtPoppinsSemiBold30"
  >
    {subCategory.price} د.ل  
  </Text>
</div>
        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
          <RatingBar
            className="flex justify-between w-[140px]"
            value={5} // Replace with dynamic value if available
            starCount={5}
            activeColor="#f54748"
            size={24}
          />
        </div>
      </div>
    </div>
  ))}
                  </div>
                </div>
                <div className="flex flex-row font-inter gap-2.5 items-center justify-center w-1/5 md:w-full">
                  {/* <Img
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
                  </div> */}
                  {/* <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  /> */}
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

export default SubMenu;
