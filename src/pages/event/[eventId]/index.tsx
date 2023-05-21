import { Special } from "@/components";
import { SpecialEventCart } from "@/components/EventCart";
import { bigEventCarts, specialEventCarts } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const EventDeatil = () => {
  const [saved, setSaved] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [deatilBtn, setDeatilBtn] = useState<boolean>(false);
  const router = useRouter();
  const id: any = router.query.eventId;
  const data = specialEventCarts[id];
  const detail = data?.detail;

  return (
    <main className="w-full font-['Inter']">
      <div className="p-[125px_32px_0] max-w-[1920px] m-auto relative lg:px-[45px]">
        <div className="flexrow">
          {/* back buttom */}
          <div className="w-[25%] absolute left-[32px] top-125px lg:left-[60px]">
            <button className="items-center gap-[6px] lg:flexrow" onClick={() => router.push("/")}>
              <Image
                alt="back arrow icon"
                width={30}
                height={30}
                priority
                src="/otherIcons/detail-arrowRight-line.svg"
                className="w-[30px] h-[30px] rotate-[180deg] "
              />
              <span className="uppercase text-[14px] font-[400] leading-[16px] hover:underline hidden lg:block">back to all events</span>
            </button>
          </div>

          {/* event detail */}
          <div className="flexrow w-[100%]">
            {data && (
              <div className="flexcol w-full">
                <div className="flexcol gap-[50px] lg:flexrow lg:ml-[25%] lg:gap-[24px]">
                  <div className="flexcol items-center m-auto w-[160px] sm:w-[260px] lg:w-[323px] lg:m-0 xl:w-[380px]">
                    <div className="w-full h-[190px] sm:h-[290px] lg:h-[432px] xl:h-[480px]">
                      <Image alt="poster image" width={1000} height={1000} className="w-full h-full rounded-[8px]" src={data.img} />
                    </div>
                    {/* save and ticket buttoms */}
                    <div className="text-center flexcol items-center w-full pt-[12px] lg:pt-[26px]">
                      <p className="capitalize text-[12px] leading-[14px] pb-[6px] text-[#C7C9CF] sm:text-[14px] sm:leading-[16px] lg:text-[16px] lg:leading-[19px] lg:pb-[12px]">
                        {data.location}
                      </p>
                      <h1 className="font-[400] text-[14px] leading-[16px] pb-[20px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[21px] lg:pb-[30px]">
                        {data.title}
                      </h1>
                      <div className="flex justify-between w-full gap-[10px] lg:gap-[20px]">
                        <button
                          className="w-[35px] h-[35px] min-w-[35px] rounded-[50%] bg-[#12121F] flex items-center justify-center lg:h-[56px] lg:min-w-[56px] lg:w-[56px]"
                          onClick={() => setSaved((p) => !p)}
                        >
                          <Image
                            alt="save icon"
                            width={40}
                            height={40}
                            src={saved ? "/otherIcons/saved.svg" : "/otherIcons/save.svg"}
                            className={`w-[18px] h-[18px] lg:w-[25px] lg:h-[25px] ${saved ? "" : "opacity-50"}`}
                          />
                        </button>
                        <button className="py-[11.5px] rounded-[8px] font-[400] text-[10px] w-[100%] leading-[12px] bg-[#D22366] sm:text-[12px] sm:leading-[14px] lg:text-[18px] lg:leading-[21px]">
                          <p>GET TICKET</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* datail text */}
                  <div className="flexcol gap-[8px] text-[12px] leading-[14px] font-[400] sm:text-[14px] sm:leading-[16px] lg:gap-[16px]">
                    <h1>{detail?.top}</h1>
                    <h1>{detail?.time}</h1>
                    <h1>TAX - {detail?.price}</h1>
                    <h1>{detail?.day}</h1>
                    <h1>{detail?.place}</h1>
                  </div>
                </div>
                <div className="flexcol gap-[5px] pt-[55px] text-[12px] leading-[14px] font-[400] sm:text-[14px] sm:leading-[16px] lg:ml-[25%] lg:text-[16px] lg:leading-[19px]">
                  <h1 className="text-[14px] leading-[16px] font-[500] pb-[18px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[21px]">
                    Эвэнтийн тухай
                  </h1>
                  <h2>{detail?.textTitle}</h2>
                  <p className={`w-full overflow-hidden text-ellipsis ${deatilBtn ? "whitespace-normal" : "whitespace-nowrap"}`}>
                    {detail?.textDetail}
                  </p>
                </div>
                <div className="pt-[18px] lg:ml-[25%]">
                  <button onClick={() => setDeatilBtn((p) => !p)}>
                    <h1 className="text-[12px] leading-[14px] capitalize underline underline-offset-[4px] sm:text-[14px] sm:leading-[16px] lg:text-[16px] lg:leading-[19px]">
                      {deatilBtn ? "Хураах" : "Дэлгэрэнгүй"}
                    </h1>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* special events */}
        <Special />
      </div>
    </main>
  );
};

export default EventDeatil;
