import StarIcon from "../Icons/StarIcon";
import AddToCart from './../Icons/AddToCart';


const Card = () => {
  return (
    <div className="w-[232px]">
      <div className="card_image overflow-hidden">
        <img src="https://picsum.photos/id/321/232/310" alt="" />
      </div>

      <div className="px-2 py-3">
        <h5 className="text-xs leading-4">
          Kungaboqar yog'i Щедрое лето,
          tozalangan, 900 ml
        </h5>
        <div className="flex items-center gap-1 mt-[6px] mb-[10px] text-xs text-[#8A8D93]">
          <StarIcon />
          <span>5.0 </span>
          <span>(1128 baho)</span>
        </div>
        <p className="px-[5px] bg-[#FF0] rounded w-fit mb-4">1 680 so'm/oyiga</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-[#757575] line-through leading-3">21 000 so'm</span>
            <h4 className="text-sm font-medium leading-4">14 000 so'm</h4>
          </div>
          <div className="p-1 border rounded-full w-fit">
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;