import CatalogIcon from "../UI/Icons/CatalogIcon";
import SearchIcon from "../UI/Icons/SearchIcon";
import UzumLogo from "../UI/Icons/UzumLogo";
import UserIcon from "../UI/Icons/UserIcon";
import HeartIcon from './../UI/Icons/HeartIcon';
import CartIcon from './../UI/Icons/CartIcon';
import { Link } from "react-router-dom";

const HeaderMiddle = () => {
  return (
    <div className="flex items-center justify-between pt-[17px] pb-[10px]">
      <Link to="/">
        <UzumLogo />
      </Link>

      <div className="flex gap-[7px]">
        <button className="px-[18px] py-2 flex gap-[10px] bg-[#3131C41A] rounded">
          <CatalogIcon />
          <p className="text-[#3333CC]">Katalog</p>
        </button>
        <div className="w-[520px] flex items-center justify-between border border-[#76797F4D] rounded">
          <div className="pl-[17px] w-full">
            <input className="focus:outline-none min-w-full" type="text" placeholder="Искать товары и категории" />
          </div>
          <div className="px-[27px] py-2 bg-[rgba(118,121,127,0.05)]">
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <UserIcon />
          <span className="px-[9px] py-[5px] font-medium text-sm">Kirish</span>
        </div>

        <Link to='/liked'>
          <div className="flex items-center">
            <HeartIcon />
            <span className="px-[9px] py-[5px] font-medium text-sm">Saralangan</span>
          </div>
        </Link>

        <Link to="/cart">
          <div className="flex items-center">
            <CartIcon />
            <span className="px-[9px] py-[5px] font-medium text-sm">Savat</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMiddle;