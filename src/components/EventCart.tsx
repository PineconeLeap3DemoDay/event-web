import Image from "next/image";
import { useRouter } from "next/router";

export const SpecialEventCart = (props: { img: string; mount: string; day: string; location: string; title: string; id: number }) => {
  const router = useRouter();
  return (
    <button className="flexcol font-[300]" onClick={() => router.push(`/event/${props.id}`)}>
      <div className="relative w-[435px] h-[435px] max-[1900px]:w-full max-[1850px]:h-[400px]  max-[1600px]:w-full max-[1600px]:h-[330px]">
        <Image width={1000} height={1000} alt="special events" priority src={props.img} className="w-full h-full rounded-[8px]" />
        <div
          className="absolute right-[20px] top-[20px] w-[62px] h-[62px] bg-white text-[#000] rounded-[8px] flexcol justify-center
        max-[1600px]:w-[45px] max-[1600px]:h-[45px] max-[1600px]:right-[16px] max-[1600px]:top-[16px] 
        "
        >
          <h3 className="text-[16px] text-center max-[1600px]:text-[12px] ">{props.mount}</h3>
          <h2 className="text-[24px] text-center max-[1600px]:text-[18px] max-[1600px]:leading-[18px]">{props.day}</h2>
        </div>
      </div>
      <p className="text-center w-full text-[20px] text-[#C7C9CF] pt-[24px] max-[1600px]:text-[15px] max-[1600px]:pt-[18px] max-[1600px]:pb-[5px]">
        {props.location}
      </p>
      <h3 className="text-center w-full text-[24px] max-[1600px]:text-[17px]">{props.title}</h3>
    </button>
  );
};

export const BigEventCart = (props: { img: string; mount: string; day: string; location: string; title: string; id: number }) => {
  const router = useRouter();
  return (
    <div className="flex font-[300] text-[#fff] gap-[32px] max-[1600px]:gap-[22px]">
      <div className="relative w-[735px] h-[840px] max-[1600px]:w-[41%] max-[1600px]:h-[630px]">
        <Image
          width={1000}
          height={1000}
          alt="special events"
          src={props.img}
          className="w-full h-full rounded-[8px] cursor-pointer"
          onClick={() => router.push(`/event/${props.id}`)}
        />
        <div
          className="absolute right-[40px] top-[40px] w-[80px] h-[80px] bg-white text-[#000] rounded-[8px] flexcol justify-center
        max-[1600px]:w-[60px] max-[1600px]:h-[60px] max-[1600px]:right-[30px] max-[1600px]:top-[30px]
        "
        >
          <h3 className="text-[16px] text-center font-[400] max-[1600px]:text-[12px]">{props.mount}</h3>
          <h2 className="text-[24px] text-center max-[1600px]:text-[18px] max-[1600px]:leading-[20px]">{props.day}</h2>
        </div>
      </div>
      <div className="flexcol justify-start gap-[24px] max-[1600px]:gap-[20px]">
        <button onClick={() => router.push(`/event/${props.id}`)}>
          <h1 className="text-[40px] font-[400] underline underline-offset-[8px] decoration-[2.5px] leading-[48px] max-[1750px]:text-[30px] max-[1600px]:text-[28px] max-[1600px]:leading-[30px]">
            {props.title}
          </h1>
        </button>
        <p className="text-[24px] text-[#C7C9CF] text-left max-[1750px]:text-[20px] max-[1600px]:text-[16px]">{props.location}</p>
        <p className="text-[24px] font-[400] text-left max-[1750px]:text-[20px] max-[1600px]:text-[18px] max-[1600px]:leading-[18px]">
          {props.mount}, {props.day}
        </p>
        {/* view event buttom */}
        <button
          className="flexrow items-center justify-center bg-[#12121F] rounded-[8px] h-[60px] w-[205px] gap-x-[10px] max-[1600px]:h-[45px] max-[1600px]:w-[155px]"
          onClick={() => router.push(`/event/${props.id}`)}
        >
          <span className="text-[#686873] text-[18px] max-[1750px]:text-[16px]  max-[1600px]:text-[14px] uppercase">view event</span>
          <Image
            width={30}
            height={30}
            alt="arrow right icon"
            src="/otherIcons/detail-arrowRight-line.svg"
            className="w-[30px] h-[30px]  max-[1600px]:h-[20px]  max-[1600px]:w-[20px] opacity-30"
          />
        </button>
      </div>
    </div>
  );
};
