import Image from "next/image";
import { PiHandbagThin } from "react-icons/pi";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
export function Header() {
  return (
    <div className="flex justify-between items-center rounded-3xl p-6 bg-[#B0E3F9] mx-40">
      <Image src="/logo.webp" alt="logo" width={48} height={48} />
      <div className="gap-3 flex flex-row">
        <a href="">Новинки</a>
        <a href="">Мужское</a>
        <a href="">Аксессуары</a>
        <a href="">Бренды</a>
        <a href="">Sale</a>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <PiHandbagThin size={32} />
        <CiSearch size={32} />
        <IoPersonOutline size={32} />
        <CiHeart size={32} />
      </div>
    </div>
  );
}
