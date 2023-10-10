import { useState, useEffect } from "react";
import Breadcrumb from "../../components/UI/Breadcrumbs/Breadcrumb";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";
import Counter from "../../components/UI/Counter";
import "./style.scss";
import {
  ArrowLeft,
  ArrowRight,
} from "../../components/UI/CardIcons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import UnderlineTab from "../../components/UI/Tab";

const ProductItem = () => {
  let [data, setData] = useState([]);
  let [product, setProduct] = useState([]);
  let [count, setCount] = useState(1);

  let location = useLocation();
  let { slug } = useParams();

  function createBreadcrumb(state) {
    let res = state.split("/").splice(1);
    setData(res);
  }

  const state = () => {
    useProductApi.getOneItem(slug).then((res) => {
      setProduct(res.data[0]);
    });
  };

  useEffect(() => {
    createBreadcrumb(location.pathname);
    state();
  }, [slug]);


  return (
    <section id="item" className="py-8">
      <div className="container mx-auto">
        <Breadcrumb data={data} />

        <div className="flex justify-between gap-x-20 pt-6">
          <div>
            {
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay, Navigation]}
                loop={true}
                navigation={{
                  nextEl: ".button-next-slide",
                  prevEl: ".button-prev-slide",
                }}
                className="card-slider"
              >
                {product?.images?.map((item, index) => (
                  <SwiperSlide key={index} className="">
                    <img
                      src={`https://image.minibox.uz${item}`}
                      alt="img"
                      className="w-full"
                    />
                  </SwiperSlide>
                ))}
                <div className="button-next-slide absolute right-2 top-[50%]  z-50 w-[28px] h-[28px] flex items-center justify-center rounded-full cursor-pointer bg-gray-100 hover:bg-gray-300">
                  <ArrowRight />
                </div>
                <div className="button-next-slide absolute left-2 top-[50%]  z-50 w-[28px] h-[28px] flex items-center justify-center rounded-full cursor-pointer bg-gray-100 hover:bg-gray-300">
                  <ArrowLeft />
                </div>
              </Swiper>
            }
          </div>

          <div className="w-[700px] px-8">
            <div className="w-full pb-[25px] border-b">
              <div className="flex items-center justify-between mb-3">
                <p>
                  {product.count} ta sotuvda bor
                </p>
                <div className="flex items-center gap-[6px] hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M1.81982 6.17836C1.81982 3.78266 3.75498 1.79999 6.1982 1.79999C8.10799 1.79999 9.34311 3.02287 9.91982 3.76804C10.4965 3.02287 11.7317 1.79999 13.6414 1.79999C16.0854 1.79999 18.0198 3.78271 18.0198 6.17836C18.0198 7.22687 17.5993 8.26759 16.9879 9.23849C16.3743 10.2128 15.5466 11.1513 14.6808 12.0039C13.4809 13.1857 12.148 14.2548 11.1919 15.0216C10.7854 15.3476 10.4471 15.6189 10.2162 15.8211C10.0465 15.9695 9.79316 15.9695 9.6235 15.8211C9.39247 15.6189 9.05416 15.3476 8.64775 15.0216C7.6917 14.2548 6.35876 13.1857 5.1588 12.0039C4.29304 11.1513 3.46535 10.2128 2.85176 9.23849C2.24034 8.26759 1.81982 7.22687 1.81982 6.17836ZM6.1982 2.69999C4.25818 2.69999 2.71982 4.27353 2.71982 6.17836C2.71982 6.99067 3.0488 7.86245 3.61332 8.75886C4.17565 9.65177 4.95032 10.5354 5.79031 11.3627C6.95912 12.5138 8.19563 13.5045 9.14039 14.2615C9.43138 14.4947 9.69469 14.7056 9.91982 14.8923C10.1449 14.7056 10.4083 14.4947 10.6992 14.2615C11.644 13.5045 12.8806 12.5138 14.0493 11.3627C14.8894 10.5354 15.664 9.65177 16.2263 8.75886C16.7909 7.86245 17.1198 6.99067 17.1198 6.17836C17.1198 4.27348 15.5821 2.69999 13.6414 2.69999C11.7564 2.69999 10.6561 4.23189 10.3728 4.68924C10.1653 5.02424 9.67437 5.02423 9.46685 4.68923C9.18353 4.23188 8.08332 2.69999 6.1982 2.69999Z" fill="#15151A" />
                  </svg>
                  <span>Tanlash</span>
                </div>
              </div>
              <h1 className="text-xl font-['InterSemibold'] mb-2">
                {product?.name}
              </h1>

              <div className="w-[240px]">
                <div className="flex items-center justify-between mb-2">
                  <p>Sotuvchi:</p>
                  <p>Online market</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-1">
                    <p>Yetkazib berish:</p>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <g clipPath="url(#clip0_221_106)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.46997 14.5C11.336 14.5 14.47 11.366 14.47 7.5C14.47 3.63401 11.336 0.5 7.46997 0.5C3.60398 0.5 0.469971 3.63401 0.469971 7.5C0.469971 11.366 3.60398 14.5 7.46997 14.5ZM8.47 4C8.47 4.55229 8.02228 5 7.47 5C6.91771 5 6.47 4.55229 6.47 4C6.47 3.44772 6.91771 3 7.47 3C8.02228 3 8.47 3.44772 8.47 4ZM6.57009 6.29844C6.23872 6.29844 5.97009 6.56707 5.97009 6.89844C5.97009 7.22981 6.23872 7.49844 6.57009 7.49844H6.87005V10.3024H6.07156C5.74019 10.3024 5.47156 10.571 5.47156 10.9023C5.47156 11.2337 5.74019 11.5023 6.07156 11.5023H8.87152C9.20289 11.5023 9.47152 11.2337 9.47152 10.9023C9.47152 10.571 9.20289 10.3024 8.87152 10.3024H8.07005V6.89844C8.07005 6.56707 7.80143 6.29844 7.47005 6.29844H6.57009Z" fill="#CACBCE" />
                        </g>
                        <defs>
                          <clipPath id="clip0_221_106">
                            <rect width="14" height="14" fill="white" transform="translate(0.469971 0.5)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <p>1 kun, bepul</p>
                </div>
              </div>
            </div>
            {
              product?.colors ? (
                <div className="pt-6 pb-8">
                  <p>Rang:</p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="border-2 border-gray-400 w-6 h-6 bg-white rounded-full"></div>
                    <div className="border-2 border-black w-6 h-6 bg-black rounded-full"></div>
                    <div className="border-2 border-black w-6 h-6 bg-green-800 rounded-full"></div>
                  </div>
                </div>
              ) : ""
            }
            <div className="mb-6">
              <p className="mb-[10px]">Miqdor:</p>
              <div className="flex items-center gap-x-[18px]">
                <div className="max-w-fit">
                  <Counter setCount={setCount} count={count} />
                </div>
                <p className="text-sm text-[#00C853]">Sotuvda {product.count} dona bor</p>
              </div>
            </div>

            <div className="mb-6">
              <p>Narx:</p>
              <div className="flex items-center gap-x-5">
                <h3 className="text-xl text-[#212121] font-medium">
                  {String(product?.price * count - product?.price * count * 0.1).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  so'm
                </h3>
                <del className="text-sm text-[#8A8D93] line-through">
                  {String(product?.price * count).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  so'm
                </del>

                <div className="px-[6px] bg-[#AAFF77] rounded-md">
                  <p className="text-base font-medium">Katta sotuvlar</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F5F6FA] rounded-xl flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-[6px] rounded-lg bg-[#FFFF00]">
                  <p className="text-sm text-[#1F1F26] font-semibold">Oyiga 3 960 so'mdan</p>
                </div>
                <p className="text-sm font-medium ml-3"> muddatli to'lov</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15.4286 12C15.4286 12.3148 15.2583 12.4282 15.0436 12.6262L9.85718 17.4208C9.6885 17.5882 9.53241 17.7857 9.19427 17.7857C8.9565 17.7857 8.57147 17.6016 8.57147 17.0993C8.57147 16.7879 8.82364 16.6415 9.00004 16.4665L13.8148 12L8.99335 7.52679C8.82467 7.35177 8.56812 7.22211 8.56812 6.85715C8.56812 6.5692 8.79244 6.21429 9.25118 6.21429C9.50421 6.21429 9.73538 6.45201 9.90407 6.61943L15.0436 11.3572C15.2583 11.5626 15.4286 11.6853 15.4286 12Z" fill="#76797F" fillOpacity="0.6" />
              </svg>
            </div>

            <div className="flex items-center gap-x-2 my-6">
              <button className="max-w-[300px] py-[18px] px-[82px] bg-[#7000FF] hover:bg-[#6f00ffd0] duration-200 text-white rounded-xl font-medium text-base">
                Savatga qoʻshish
              </button>
              <button className="border-2 border-[#7000FF] text-[#7000FF] hover:bg-[rgba(0,0,0,0.1)] duration-200 py-[16px] grow rounded-lg text-base font-medium">
                Tugmani 1 bosishda xarid qilish
              </button>
            </div>

            <div className="px-[32px] w-full bg-[#FFE4334D] rounded-lg pt-[5px] pb-2 flex items-center gap-x-[5px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.4099 4.5C12.6501 4.5 11.4099 5.88779 11.4099 7.5H17.4099C17.4099 5.88779 16.1697 4.5 14.4099 4.5ZM9.90991 11.5V9H7.90991V14.25C7.90991 14.6642 7.57412 15 7.15991 15C6.74569 15 6.40991 14.6642 6.40991 14.25V8.25V7.5H7.15991H9.90991C9.90991 5.11221 11.7697 3 14.4099 3C17.0501 3 18.9099 5.11221 18.9099 7.5H21.6599H22.4099V8.25V21.75C22.4099 22.9926 21.4025 24 20.1599 24H15.6599C15.2457 24 14.9099 23.6642 14.9099 23.25C14.9099 22.8358 15.2457 22.5 15.6599 22.5H20.1599C20.5741 22.5 20.9099 22.1642 20.9099 21.75V9H18.9099V11.5H17.4099V9H11.4099V11.5H9.90991ZM14.6837 18.0323C14.9766 17.7395 14.9766 17.2646 14.6837 16.9717C14.3908 16.6788 13.9159 16.6788 13.623 16.9717L8.40539 22.1893L6.19026 19.9742C5.89736 19.6813 5.42248 19.6813 5.12958 19.9741C4.83669 20.267 4.83668 20.7419 5.12957 21.0348L7.87504 23.7803C8.0157 23.921 8.20646 24 8.40538 24C8.60429 24 8.79506 23.921 8.93571 23.7803L14.6837 18.0323Z" fill="#141415" />
              </svg>
              <p className="text-sm text-[#141415]">Bu haftada 2092 kishi sotib oldi</p>
            </div>
          </div>
        </div>


        <div className="max-w-[788px] mx-auto mt-[26px]">
          <UnderlineTab />
        </div>
      </div>
    </section>
  );
};

export default ProductItem;