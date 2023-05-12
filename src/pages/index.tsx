import { BigEventCart, SpecialEventCart } from "@/components/EventCart";
import { bigEventCarts, specialEventCarts } from "@/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full font-['Inter'] relative">
      <div className="bg-[url('/images/homeBack.png')] bg-no-repeat bg-cover w-full h-[100vh] z-[0] absolute"></div>
      <div className="pt-[165px] max-w-[1920px] w-full m-auto px-[60px]">
        {/* search */}
        <div className="w-full relative">
          <input
            type="search"
            placeholder="Хайх"
            className="border-[0.5px] border-[#fff] rounded-[8px] w-full bg-transparent h-[60px] text-[#fff] placeholder-[#C7C9CF] px-[50px] text-[18px] focus:outline-none"
          />
          <Image width={30} height={30} src="/otherIcons/search.svg" className="absolute top-0 bottom-0 m-auto left-[10px]" alt="search icon" />
        </div>
        {/* ---- */}
        <div className="text-[#fff] pt-[80px]">
          <h1 className="font-[400] text-[24px] pb-[80px] capitalize">онцлох эвэнт</h1>
          <div className="flex flex-row gap-[24px]">
            {specialEventCarts.map((el, i) => {
              return <SpecialEventCart key={i} {...el} />;
            })}
          </div>
        </div>
        <div id="comming" className="pt-[125px]">
          <a href="#comming">
            <h1 className="capitalize text-[#D22366] font-[400] text-[32px] w-full text-center">удахгүй болох эвэнт</h1>
          </a>
          <div className="flex flex-col pt-[125px] gap-[80px]">
            {bigEventCarts.map((el, i) => {
              return <BigEventCart key={i} {...el} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
