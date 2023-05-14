import { SpecialEventCart } from "@/components/EventCart";
import { bigEventCarts, specialEventCarts } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const EventDeatil = () => {
  const [saved, setSaved] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const router = useRouter();
  const id: any = router.query.eventId;
  const data = specialEventCarts[id];
  const detail = data?.detail;

  return (
    <main className="w-full font-['Inter'] relative text-[#fff]">
      <div className="p-[235px_60px_0] max-w-[1920px] m-auto max-[1600px]:p-[180px_45px_0]">
        <div className="flexrow gap-[200px] max-[1600px]:gap-[140px] ">
          {/* back buttom */}
          <button
            className="flexrow items-center justify-center h-[50px] min-w-[240px] gap-[10px] max-[1600px]:min-w-[200px] max-[1600px]:h-[30px] max-[1600px]:gap-[8px] "
            onClick={() => router.push("/")}
          >
            <Image
              alt="back arrow icon"
              width={30}
              height={30}
              priority
              src="/otherIcons/detail-arrowRight-line.svg"
              className="w-[30px] h-[30px] rotate-[180deg] max-[1600px]:w-[25px] max-[1600px]:h-[25px]"
            />
            <span className="uppercase text-[18-px] font-[400] leading-[18px] hover:underline max-[1600px]:text-[13px]">back to all events</span>
          </button>
          {/* event detail */}
          <div className="flexrow">
            {data && (
              <div className="flexcol w-full">
                <div className="flexrow gap-[20px]  max-[1600px]:gap-[15px]">
                  <div className="flexcol">
                    <div className="w-[435px] h-[555px] box-border relative max-[1600px]:w-[330px] max-[1600px]:h-[410px]">
                      <Image alt="poster image" width={1000} height={1000} className="w-full h-full rounded-[8px]" src={data.img} />
                      {/* favorite buttom */}
                      <button
                        className="w-[50px] h-[50px] rounded-[50%] bg-[#FFFFFF33] flex items-center justify-center absolute top-[25px] right-[25px] max-[1600px]:w-[40px] max-[1600px]:h-[40px] max-[1600px]:top-[20px] max-[1600px]:right-[20px]"
                        onClick={() => setLiked((p) => !p)}
                      >
                        <Image
                          alt="save icon"
                          width={40}
                          height={40}
                          src={liked ? "/otherIcons/favorited.svg" : "/otherIcons/favorite.svg"}
                          className="w-[30px] h-[30px]  max-[1600px]:w-[25px]  max-[1600px]:h-[25px]"
                        />
                      </button>
                    </div>
                    {/* save and ticket buttoms */}
                    <div className="pt-[40px] max-[1600px]:pt-[20px]">
                      <h1 className="font-[400] text-[32px] max-[1600px]:text-[22px] text-center">{data.title}</h1>
                      <div className="flexrow w-full justify-between pt-[30px]  max-[1600px]:pt-[15px]">
                        <button
                          className="w-[60px] h-[60px] rounded-[50%] bg-[#FFFFFF33] flex items-center justify-center max-[1600px]:w-[45px] max-[1600px]:h-[45px]"
                          onClick={() => setSaved((p) => !p)}
                        >
                          <Image
                            alt="save icon"
                            width={40}
                            height={40}
                            src={saved ? "/otherIcons/saved.svg" : "/otherIcons/save.svg"}
                            className="w-[25px] h-[25px] max-[1600px]:w-[18px] max-[1600px]:h-[18px]"
                          />
                        </button>
                        <button className="h-[60px] w-[360px] bg-[#D22366] rounded-[8px] text-[18px] font-[400] max-[1600px]:h-[45px] max-[1600px]:w-[270px] max-[1600px]:text-[14px] max-[1600px]:rounded-[6px]">
                          <p>GET TICKET</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* datail text */}
                  <div className="text-[18px] font-[400] leading-[21px] flexcol gap-[18px] max-[1600px]:text-[14px] max-[1600px]:gap-[10px]">
                    <h1>{detail?.top}</h1>
                    <h1>{detail?.time}</h1>
                    <h1>TAX - {detail?.price}</h1>
                    <h1>{detail?.day}</h1>
                    <h1>{detail?.place}</h1>
                  </div>
                </div>
                <div className="pt-[95px] text-[18px] font-[400] flexcol gap-[20px] pb-[45px]  max-[1600px]:text-[14px]  max-[1600px]:gap-[10px]">
                  <h2>{detail?.textTitle}</h2>
                  <p>{detail?.textDetail}</p>
                  {detail?.textDetail1 && <p>{detail?.textDetail1}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* special events */}
        <div className="pt-[80px] text-[#fff] max-[1600px]:pt-[55px]">
          <h1 className="font-[400] text-[24px] pb-[80px] capitalize max-[1600px]:text-[18px] max-[1600px]:pb-[55px]">онцлох эвэнт</h1>
          <div className="grid grid-cols-4 grid-rows-1 gap-[24px] max-[1600px]:gap-[16px]">
            {specialEventCarts.map((el, i) => {
              return <SpecialEventCart key={i} {...el} id={i} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventDeatil;
