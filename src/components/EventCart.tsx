import Image from "next/image";

export const SpecialEventCart = (props: { img: string; mount: string; day: string; location: string; title: string }) => {
  return (
    <button className="flex flex-col font-[300]">
      <div className="relative w-[435px] h-[435px]">
        <Image width={1000} height={1000} alt="special events" src={props.img} className="w-full h-full" />
        <div className="absolute right-[20px] top-[20px] w-[62px] h-[62px] bg-white text-[#000] rounded-[8px] flex flex-col justify-center">
          <h3 className="text-[16px] text-center">{props.mount}</h3>
          <h2 className="text-[24px] text-center">{props.day}</h2>
        </div>
      </div>
      <p className="text-center w-full text-[20px] text-[#C7C9CF] pt-[24px]">{props.location}</p>
      <h3 className="text-center w-full text-[24px]">{props.title}</h3>
    </button>
  );
};

export const BigEventCart = (props: { img: string; mount: string; day: string; location: string; title: string }) => {
  return (
    <div className="flex font-[300] text-[#fff] gap-[32px]">
      <div className="relative w-[735px] h-[840px]">
        <Image width={1000} height={1000} alt="special events" src={props.img} className="w-full h-full" />
        <div className="absolute right-[40px] top-[40px] w-[80px] h-[80px] bg-white text-[#000] rounded-[8px] flex flex-col justify-center">
          <h3 className="text-[16px] text-center font-[400]">{props.mount}</h3>
          <h2 className="text-[24px] text-center">{props.day}</h2>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-[24px]">
        <h3 className="text-[40px] font-[400] underline underline-offset-[8px] decoration-[2.5px] leading-[48px]">{props.title}</h3>
        <p className="text-[24px] text-[#C7C9CF] text-left ">{props.location}</p>
        <p className="text-[24px] font-[400] text-left">
          {props.mount}, {props.day}
        </p>
        <button className="flex flex-row items-center justify-center bg-[#12121F] rounded-[8px] h-[60px] w-[205px] gap-x-[10px]">
          <span className="text-[#686873] text-[18px]">VIEW EVENT</span>
          <Image width={30} height={30} alt="arrow right icon" src="/otherIcons/detail-arrowRight-line.svg" className="w-[30px] h-[30px]" />
        </button>
      </div>
    </div>
  );
};
