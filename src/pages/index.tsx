import { BigEventCart, SpecialEventCart } from "@/components/EventCart";
import { useChangesNavbarSearch } from "@/context";
import { bigEventCarts, specialEventCarts } from "@/utils";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function Home() {
  const { search, setSearch } = useChangesNavbarSearch() as { search: boolean; setSearch: Dispatch<SetStateAction<boolean>> };
  return (
    <main className={`w-full font-['Inter'] relative duration-[0.3s] ${search ? "bg-[#000]" : ""}`}>
      <div
        className={`bg-[url('/images/homeBack.jpeg')] bg-no-repeat bg-cover w-full h-[115vh] z-[-1] absolute duration-[0.5s] ${
          search ? "opacity-0 h-[100vh]" : ""
        }`}
      />
      <div className="pt-[165px] max-w-[1920px] w-full m-auto px-[60px] max-[1600px]:px-[45px] max-[1600px]:pt-[125px]">
        <SearchInput set={setSearch} />
        <div className={`pt-[80px] text-[#fff] max-[1600px]:pt-[55px] duration-[0.3s] ${search ? "translate-y-[100%] opacity-0 hidden" : ""}`}>
          <h1 className="font-[400] text-[24px] pb-[80px] capitalize max-[1600px]:text-[18px] max-[1600px]:pb-[55px]">онцлох эвэнт</h1>
          <div className="grid grid-cols-4 grid-rows-1 gap-[24px] max-[1600px]:gap-[16px]">
            {specialEventCarts.map((el, i) => {
              return <SpecialEventCart key={i} {...el} id={i} />;
            })}
          </div>
        </div>
        <div id="comming" className={`pt-[125px] max-[1600px]:pt-[85px]duration-[0.3s] ${search ? "mt-[60vh] hidden" : ""}`}>
          <a href="#comming">
            <h1 className="uppercase text-[#D22366] font-[400] text-[32px] w-full text-center max-[1600px]:text-[24px]">удахгүй болох эвэнт</h1>
          </a>
          <div className="flexcol pt-[125px] gap-[80px] max-[1600px]:pt-[90px]  max-[1600px]:gap-[60px]">
            {bigEventCarts.map((el, i) => {
              return <BigEventCart key={i} {...el} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

const SearchInput = ({ set }: { set: any }) => {
  const [currentChoice, setCurrentChoice] = useState();
  const { search } = useChangesNavbarSearch() as { search: boolean };

  return (
    <div className="w-full">
      <div className="w-full relative">
        <input
          type="search"
          placeholder="Хайх"
          className="border-[0.5px] border-[#C7C9CF] rounded-[8px] w-full bg-transparent h-[60px] text-[#fff] placeholder-[#C7C9CF] px-[50px] text-[18px] focus:outline-none
      max-[1600px]:h-[45px] max-[1600px]:border-[0.01px] max-[1600px]:text-[14px] max-[1600px]:px-[40px]
      "
          onClick={() => set(true)}
          // onBlur={() => set(false)}
        />
        <Image
          width={30}
          height={30}
          src="/otherIcons/search.svg"
          className="absolute top-0 bottom-0 m-auto left-[10px] max-[1600px]:left-[8px] max-[1600px]:w-[25px] max-[1600px]:h-[25px]"
          alt="search icon"
        />
      </div>
      <div className={`w-full pt-[100px] font-['Inter'] font-[300] max-[1600px]:pt-[70px] ${search ? "" : " hidden"}`}>
        <h1 className="text-[#fff] text-[24px] pb-[32px] max-[1600px]:text-[18px] max-[1600px]:pb-[25px]">Өдөр</h1>
        <div className="flexrow gap-[16px] pb-[80px] max-[1600px]:gap-[12px] max-[1600px]:pb-[60px]">
          {["Өнөөдөр", "Маргааш", "Энэ долоо хоногт", "Энэ сард"].map((el, i) => {
            return (
              <button
                key={i}
                className={`capitalize text-[#686873] text-[18px] bg-[#12121F] rounded-[8px] px-[24px] py-[12px] focus:bg-[#D22366] focus:text-[#FFF] max-[1600px]:text-[13px] max-[1600px]:p-[8px_18px]`}
                onClick={() => {
                  set(false);
                }}
              >
                <p>{el}</p>
              </button>
            );
          })}
        </div>
        <h1 className="text-[#fff] text-[24px] pb-[32px] max-[1600px]:text-[18px] max-[1600px]:pb-[25px]">Катигори</h1>
        <div className="flex flex-wrap gap-[16px] pb-[80px] max-[1600px]:gap-[12px]">
          {categories.map((el, i) => {
            return (
              <button
                key={i}
                className={`capitalize text-[#686873] text-[18px] bg-[#12121F] rounded-[8px] px-[24px] py-[12px] max-[1600px]:text-[13px] max-[1600px]:p-[8px_18px]`}
                onClick={(e) => {
                  set(true);
                  e.currentTarget.style.background = "#D22366";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                <p>{el}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const categories = [
  "Одон орон",
  "Хөгжим",
  "Гоо сайхан",
  "Эрүүл мэнд",
  "Уран зураг",
  "Театр",
  "Е-Спорт",
  "Фестивал",
  "Технологи",
  "Одон орон",
  "Хөгжим",
  "Гоо сайхан",
  "Эрүүл мэнд",
  "Уран зураг",
  "Театр",
  "Е-Спорт",
  "Фестивал",
  "Технологи",
];
