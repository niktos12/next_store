import Image from "next/image";
import { BsFillHandbagFill } from "react-icons/bs";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-[#181818] flex flex-col h-[500px] rounded-3xl items-center justify-center">
      <Image
        src={product.image}
        alt={product.name}
        className="scale-110"
        width={350}
        height={300}
      />
      <div className="text-left p-3 w-[100%] text-white">
        <p className="">{product.name}</p>
        <p className="">
          {product.price}
          <span>₽</span>
        </p>
        <button className="bg-[#B0E3F9] p-3 rounded-3xl text-black flex flex-row gap-3 items-center w-full justify-center">
          В корзину
          <BsFillHandbagFill />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
