import React, { useState } from "react";
import Counter from "../Counter";

const CartItem = ({ item }) => {
    const [count, setCount] = useState(1);


    return (
        <div className="flex items-center border-t-[1px] py-[20px] justify-between">
            <div className="flex items-center">
                <div>
                    <input type="checkbox" />
                </div>
                <div className="w-[120px] h-[120px] ml-[10px] mr-[15px]">
                    <img
                        src={`https://image.minibox.uz${item?.images[0]}`}
                        alt=""
                        className="object-contain w-full h-full"
                    />
                </div>
                <div className="flex flex-col justify-between h-[120px]">
                    <h3 className="text-[18px] font-semibold" title={item?.name}>{item?.name.length > 45 ? item?.name.substring(0, 45) + "..." : item?.name}</h3>
                    <div className="flex items-start justify-between min-w-[450px] w-full  h-[65px]">
                        <div className="flex flex-col justify-end  h-[65px]">
                            <p className="text-gray-600 text-[13px]">
                                Ja'mi qolgan:{" "}
                                <span className="text-black font-semibold">{item?.count}</span>{" "}
                                ta
                            </p>
                            <p className="text-gray-600 text-[13px]">
                                Sotuvchi:{" "}
                                <span className="text-black font-semibold">Sunnatbek</span>
                            </p>
                            {item?.colors.length > 0 && (
                                <div className="flex items-center">
                                    <span className="text-gray-600 text-[13px]">Ranglari:</span>
                                    {item.colors.map((v, index) => (
                                        <div
                                            key={index}
                                            style={{ backgroundColor: v.name }}
                                            className={`w-[12px] h-[12px] rounded-full m-[2px]`}
                                        ></div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Counter setCount={setCount} count={count} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 hover:text-black cursor-pointer">
                    <svg data-v-a72a970e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z" fill="#8A8D93"></path>
                    </svg>
                    <p className="text-sm text-[#8A8D93] hover:text-black">Yo'q qilish</p>
                </div>
                <h1 className="text-[18px]">
                    <strong>
                        {String(item?.price * count - item?.price * count * 0.1).replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            "."
                        )}{" "}
                    </strong>
                    so'm
                </h1>
                <del className="text-gray-500 text-[15px]">
                    {String(item?.price * count).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    so'm
                </del>
            </div>
        </div>
    );
};

export default CartItem;
