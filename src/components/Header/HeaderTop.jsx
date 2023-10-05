import Location from "../UI/Icons/Location";
import FlagIcon from './../UI/Icons/FlagIcon';

const HeaderTop = () => {
    return (
        <div className="h-top flex items-center justify-between h-8">
            <div className="flex items-center">
                <Location />
                <p className="mr-[23px]">Shahar: <strong className="border-b-2 border-black">Toshkent</strong></p>
                <p>Topshirish punktlari</p>
            </div>

            <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>

            <div className="flex items-center gap-x-[33px]">
                <div className="flex gap-x-[15px]">
                    <p>Savol-javoblar</p>
                    <p>Buyurtmalarim</p>
                </div>
                <div className="flex gap-x-[6px]">
                    <FlagIcon />
                    <p>Оʻzbekcha</p>
                </div>
            </div>
        </div>
    )
};

export default HeaderTop;
