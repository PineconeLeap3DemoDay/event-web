import { DETAIL_TYPE } from "@/types";
import { SpecialEventCart } from "../EventCart";

export const Special = (props: { search: boolean; data: any }) => {
  return (
    <div className={`pt-[65px] text-[#fff] duration-[0.3s] 2xl:pt-[80px] ${props.search ? "hidden" : ""}`}>
      <h1 className="capitalize font-[500] pb-[24px] text-[16px] leading-[19px] md:text-[18px] md:leading-[21px] lg:pb-[35px] xl:pb-[40px] 2xl:text-[24px] 2xl-[29px] 2xl:pb-[60px]">
        онцлох эвэнт
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-[16px] gap-y-[40px] md:gap-x-[18px] md:gap-y-[45px] lg:grid-cols-4 lg:grid-rows-1 lg:gap-[20px] 2xl:gap-[32px]">
        {props?.data?.map((el: DETAIL_TYPE) => {
          return <SpecialEventCart key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};
