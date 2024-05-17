"use client";
import Image from "next/image";
import { IoBagCheckOutline } from "react-icons/io5";
import ProductCard, { Product } from "@/components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:3001/products");
    setProducts(res.data);
  };

  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-row items-baseline gap-1 border-2 border-[#B0E3F9] rounded-3xl p-3 max-w-[160px] items-left justify-left mb-6">
        <IoBagCheckOutline size={20} color="#181818" />
        <h1 className="text-[#181818] text-xl uppercase">Новинки</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 items-center justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
        <Marquee
          gradient={true}
          speed={100}
          autoFill={true}
          gradientWidth="100px"
          direction="left"
          className="w-full mt-4 bg-[linear-gradient(90deg,#B0E3F9_0%,#FFFFFF_100%)] h-12 rounded-3xl"
        >
          <p className="flex flex-row gap-2 items-center text-3xl ml-6">Успей купить<HiOutlineCheckBadge/></p>
        </Marquee>
          
      </div>
    </div>
  );
};
export default Home;
