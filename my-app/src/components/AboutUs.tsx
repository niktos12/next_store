import Image from "next/image";
import { BiBook } from "react-icons/bi";
export function AboutUs() {
  return (
    <div>
      <div className="flex flex-row items-center gap-1 border-2 border-[#B0E3F9] rounded-3xl p-3 max-w-[200px] items-left justify-left mb-6 mt-24 mx-40">
        <BiBook size={20} color="#181818" />
        <p className="uppercase">пару слов о нас</p>
      </div>
      <div className="bg-[#B0E3F9] h-[1300px] flex flex-row items-center justify-center gap-24 rounded-[128px] p-40">
        <div className="flex flex-col items-left gap-6">
          <h1 className="text-[#181818] text-5xl">
            Будь в движении с
            <br /> кроссовками от <br />
            <span className="font-semibold">Step Forward!</span>
          </h1>
          <p className="text-[#181818] text-2xl">
            Наши кроссовки созданы для тех,
            <br />
            кто ценит комфорт и стиль в каждом шаге{" "}
          </p>
          <p className="text-[#181818] opacity-40">
            Выбирай Step Forward — выбирай лучшее для себя.
          </p>
        </div>
        <div>
          <Image
            src={"/pon.webp"}
            alt="pony"
            width={300}
            height={400}
            className="rounded-[96px] w-[650px]"
          />
        </div>
      </div>
    </div>
  );
}
