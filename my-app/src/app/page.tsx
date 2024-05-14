"use client";
import Image from "next/image";
import { IoBagCheckOutline } from "react-icons/io5";
import ProductCard, { Product } from "@/components/ProductCard";
import { useState } from "react";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const res = fetch("https://api.escuelajs.co/api/v1/products?limit=3");
    const data = await (await res).json();
    setProducts(data);
  };
  

  return (
    <div className="flex flex-col mt-12">
      <div className="flex flex-row items-baseline gap-1 border-2 border-[#B0E3F9] rounded-3xl p-3 max-w-[160px]">
        <IoBagCheckOutline size={20} color="#181818" />
        <h1 className="text-[#181818] text-xl uppercase">Новинки</h1>
      </div>
      <div className="grid grid-cols-[repeat(3,490px)]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;
