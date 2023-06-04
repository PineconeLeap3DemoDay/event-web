import { DETAIL_TYPE } from "@/types";
import { StartDateFun } from "@/utils/date";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export const SpecialEventCart = (props: DETAIL_TYPE) => {
  const router = useRouter();

  let mount = "";

  if (StartDateFun(props?.startDate)[1].split("")[0] > "0") {
    mount = StartDateFun(props.startDate)[1];
  } else {
    mount = StartDateFun(props?.startDate)[1].split("")[1];
  }
  return (
    <button className="flexcol text-center " onClick={() => router.push(`/event/${props?.id}`)}>
      <div className="relative w-full h-[190px] min-[500px]:h-[260px] sm:h-[320px] md:h-[400px] lg:h-[265px] xl:h-[380px] 2xl:h-[500px]">
        <Image
          width={1000}
          height={1000}
          alt="special events"
          priority
          src={props?.thumbnail}
          className="w-full h-full rounded-[8px] object-cover duration-[0.4s] hover:scale-[1.015]"
        />
        <div className="flexcol justify-center text-center absolute right-[12px] top-[12px] gap-[2px] rounded-[8px] py-[3px] px-[10px] bg-[#fff] md:right-[15px] md:top-[15px] md:py-[5px] xl:right-[20px] xl:top-[20px] xl:p-[6px_10px] 2xl:p-[6px_14px] 2xl:right-[25px] 2xl:top-[25px]">
          <h3 className="text-[10px] leading-[12px] font-[400] text-[#000] md:text-[12px] md:leading-[14px] xl:text-[14px] xl:leading-[19px] 2xl:text-[16px] 2xl:leading-[19px]">
            {mount}сар
          </h3>
          <h2 className="text-[16px] leading-[19px] font-[400] text-[#000] md:text-[18px] md:leading-[21px] 2xl:text-[24px] 2xl:leading-[29px]">
            {StartDateFun(props.startDate)[2]}
          </h2>
        </div>
      </div>
      <p className="w-full capitalize text-[12px] leading-[14px] pt-[12px] text-[#C7C9CF] sm:text-[14px] sm:leading-[16px]  lg:text-[16px] lg:leading-[19px] 2xl:text-[20px] 2xl:leading-[24px] 2xl:pt-[24px]">
        Улаанбаатар , Монгол
        {/* {props?.city?.name} , {props?.country?.name} */}
      </p>
      <h3 className="w-full text-[14px] leading-[16px] pt-[6px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[21px] lg:pt-[10px] 2xl:text-[24px] 2xl:leading-[29px] 2xl:pt-[12px]">
        {props?.title}
      </h3>
    </button>
  );
};

export const BigEventCart = (props: DETAIL_TYPE) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likeNumber, setLikeNumber] = useState<number>(25);
  const router = useRouter();
  let mount = "";

  if (StartDateFun(props?.startDate)[1].split("")[0] > "0") {
    mount = StartDateFun(props.startDate)[1];
  } else {
    mount = StartDateFun(props?.startDate)[1].split("")[1];
  }

  return (
    <div className="flexcol font-[300] text-[#fff] gap-[24px] lg:flexrow lg:gap-[16px] xl:gap-[24px] 2xl:gap-[32px]">
      <div className="relative w-full h-[350px] min-[500px]:h-[470px] sm:h-[540px] md:h-[700px] lg:w-[36.2%] lg:h-[385px] xl:h-[600px] xl:w-[35%] xl:min-w-[35%] 2xl:h-[800px] ">
        <Image
          width={1000}
          height={1000}
          alt="special events"
          src={props?.thumbnail}
          className="w-full h-full rounded-[8px] cursor-pointer duration-[0.4s] hover:scale-[1.015]"
          onClick={() => router.push(`/event/${props.id}`)}
        />
        <div className="flexcol justify-center text-center absolute right-[20px] top-[20px] gap-[2px] rounded-[8px] py-[3px] px-[10px] bg-[#fff] md:right-[25px] md:top-[25px] md:py-[5px] xl:p-[10px_15px] xl:right-[30px] xl:top-[30px] 2xl:p-[6px_14px]  2xl:right-[40px] 2xl:top-[40px]">
          <h3 className="text-[10px] leading-[12px] font-[400] text-[#000] md:text-[12px] md:leading-[14px] xl:text-[14px] xl:leading-[16px] 2xl:text-[16px] 2xl:leading-[19px]">
            {mount}сар
          </h3>
          <h2 className="text-[16px] leading-[19px] font-[400] text-[#000] md:text-[18px] md:leading-[21px] 2xl:text-[24px] 2xl:leading-[29px]">
            {StartDateFun(props.startDate)[2]}
          </h2>
        </div>
      </div>
      <div className="flexcol gap-[8px] md:gap-[12px] lg:gap-[16px] 2xl:gap-[24px]">
        <button onClick={() => router.push(`/event/${props.id}`)}>
          <h1 className="text-[18px] uppercase leading-[21px] font-[400] text-start underline underline-offset-[4px] md:text-[20px] md:leading-[23px] lg:text-[24px] lg:leading-[29px]  xl:text-[26px] xl:leading-[31px] 2xl:text-[38px] 2xl:leading-[45px]">
            {props.title}
          </h1>
        </button>
        <p className="capitalize text-[14px] leading-[16px] text-[#C7C9CF] md:text-[16px] md:leading-[19px] lg:text-[18px] lg:leading-[21px] 2xl:text-[24px] 2xl:leading-[29px]">
          {props?.city?.name} , {props?.country?.name}
        </p>
        <div className="flex items-center">
          {/* favorite */}
          <button
            className="h-[17px] ml-[-5px] flex items-center justify-center"
            onClick={() => {
              setLiked((p) => !p);
              setLikeNumber((p) => p + 1);
            }}
          >
            <Image
              alt="save icon"
              width={40}
              height={40}
              src={liked ? "/otherIcons/favorited.svg" : "/otherIcons/favorite.svg"}
              className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
            />
          </button>
          <p className="text-[14px] leading-[16px] font-[300] md:text-[16px] md:leading-[19px] lg:text-[18px] lg:leading-[21px] 2xl:text-[24px] 2xl:leading-[29px]">
            {likeNumber}
          </p>
        </div>
        {/* view event buttom */}
        <div>
          <button
            className="flexrow items-center rounded-[8px] gap-x-[10px] px-[20px] py-[10px] bg-[#12121F] 2xl:p-[15px_30px]"
            onClick={() => router.push(`/event/${props.id}`)}
          >
            <span className="capitalize text-[12px] leading-[14px] text-[#686873] md:text-[14px] md:leading-[16px] lg:text-[16px] lg:leading-[19px] 2xl:text-[18px] 2xl:leading-[21px]">
              Эвэнтийн дэлгэрэнгүй
            </span>
            <Image
              width={30}
              height={30}
              alt="arrow right icon"
              src="/otherIcons/detail-arrowRight-line.svg"
              className="w-[20px] h-[20px] opacity-30 lg:w-[25px] lg:h-[25px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
