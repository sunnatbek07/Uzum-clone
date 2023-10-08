import StarIcon from "../Icons/StarIcon";
import AddToCart from './../Icons/AddToCart';
import useProductStore from "../../../store/useProductStore";

const Card = () => {
  const { product } = useProductStore();

  return (
    <>
      {
        product?.length ? product.map((item, index) => {
          return (
            <div className="w-[232px] hover:shadow-md duration-300" key={index}>
              <div className="card_image overflow-hidden h-[310px]">
                <img src={`https:image.minibox.uz${item.images[0]}`} className="w-full h-full object-contain bg-white" alt="Card image" />
              </div>

              <div className="px-2 py-3">
                <h5 className="text-xs leading-4">
                  {item.name.length > 35 ? item.name.substring(0, 35) + "..." : item.name}
                </h5>
                <div className="flex items-center gap-1 mt-[6px] mb-[10px] text-xs text-[#8A8D93]">
                  <StarIcon />
                  <span>5.0 </span>
                  <span>({item.count} ta sotuvda bor)</span>
                </div>
                <p className="px-[5px] bg-[#FF0] rounded w-fit mb-4">{String(Math.floor(item.price / 3)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm/oyiga</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#757575] line-through leading-3">{String(Math.floor(item.price + item.price * 0.12)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm</span>
                    <h4 className="text-sm font-medium leading-4">{String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm</h4>
                  </div>
                  <div className="p-1 border rounded-full w-fit">
                    <AddToCart />
                  </div>
                </div>
              </div>
            </div>
          )
        }) : "No product found"
      }
    </>
  );
};

export default Card;