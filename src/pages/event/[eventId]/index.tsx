import { Special, SpecialEventCart } from "@/components";
import { GET_COMPANIES, GET_EVENTS } from "@/graphql";
import { DETAIL_TYPE } from "@/types";
import { specialEventCarts } from "@/utils";
import { StartDateFun } from "@/utils/date";
import { LoadingFun } from "@/utils/loading";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EventDeatil = () => {
  const [saved, setSaved] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [detailBtn, setDetailBtn] = useState<boolean>(false);

  const router = useRouter();
  const id: any = router.query.eventId;
  let detail: any = [];
  const { data, loading } = useQuery(GET_EVENTS) as { data: { events: DETAIL_TYPE }; loading: any };
  // const { data: companies } = useQuery(GET_COMPANIES);
  // console.log(companies?.companies);
  // const findcompany = async () => await
  // useEffect(() => {
  //   (async () => {
  //     await findcompany();
  //   })();
  // }, []);

  // console.log(findcompany);
  const fetchData = () => {
    if (id === "12345") {
      detail = specialEventCarts.filter((el) => el.id === id);
    } else {
      if (id === "12346") {
        detail = specialEventCarts.filter((el) => el.id === id);
      } else {
        if (id === "12347") {
          detail = specialEventCarts.filter((el) => el.id === id);
        } else {
          if (id === "12348") {
            detail = specialEventCarts.filter((el) => el.id === id);
          } else {
            detail = data?.events?.filter((events: DETAIL_TYPE) => events.id === id);
          }
        }
      }
    }
    LoadingFun(loading);
  };
  fetchData();

  let special = data?.events?.filter((el: DETAIL_TYPE) => el.id !== id);

  return (
    <main className="w-full font-['Inter']">
      <div className="p-[125px_32px_0] max-w-[1920px] m-auto relative lg:px-[45px] xl:pt-[180px]">
        <div className="flexrow">
          {/* back buttom */}
          <div className="w-[25%] absolute left-[32px] top-125px lg:left-[45px]">
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
            {detail && (
              <div className="flexcol w-full">
                <div className="flexcol gap-[50px] lg:flexrow lg:ml-[25%] lg:gap-[24px]">
                  <div className="flexcol items-center m-auto w-[160px] sm:w-[260px] lg:w-[323px] lg:m-0 xl:w-[330px]">
                    <div className="w-full h-[190px] sm:h-[290px] lg:h-[432px] xl:h-[420px]">
                      <Image alt="poster image" width={1000} height={1000} className="w-full h-full rounded-[8px]" src={detail[0]?.thumbnail} />
                    </div>
                    {/* save and ticket buttoms */}
                    <div className="text-center flexcol items-center w-full pt-[12px] lg:pt-[26px] xl:pt-[35px]">
                      <h1 className="font-[400] text-[14px] leading-[16px] pb-[20px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[21px] lg:pb-[25px]">
                        {detail[0]?.title}
                      </h1>
                      <div className="flex justify-between w-full gap-[10px] lg:gap-[20px]">
                        <button
                          className="w-[35px] h-[35px] min-w-[35px] rounded-[50%] bg-[#12121F] flex items-center justify-center lg:h-[45px] lg:min-w-[45px] lg:w-[45px]"
                          onClick={() => setSaved((p) => !p)}
                        >
                          <Image
                            alt="save icon"
                            width={40}
                            height={40}
                            src={saved ? "/otherIcons/saved.svg" : "/otherIcons/save.svg"}
                            className={`w-[18px] h-[18px] lg:w-[25px] lg:h-[25px] xl:w-[20px] xl:h-[20px] ${saved ? "" : "opacity-50"}`}
                          />
                        </button>
                        <button className="py-[11.5px] rounded-[8px] font-[400] text-[10px] w-[100%] leading-[12px] bg-[#D22366] sm:text-[12px] sm:leading-[14px] lg:text-[16px] lg:leading-[19px]">
                          <p>GET TICKET</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* datail text */}
                  <div className="flexcol gap-[8px] text-[12px] leading-[14px] font-[400] sm:text-[14px] sm:leading-[16px] lg:gap-[16px]">
                    <h1 className="text-[14px] font-[500] pb-[5px] md:text-[16px] xl:text-[18px]">Эвэнтийн мэдээлэл :</h1>
                    <h1>Tасалбар : {detail[0]?.price}</h1>
                    <h1>Өдөр : 5 сарын 26 - сарын 27</h1>
                    <h1>Цаг : 7:00 PM - 10:30 PM</h1>
                    <h1 className="">Зохион байгуулсан :</h1>
                  </div>
                </div>
                <div className="flexcol gap-[5px] pt-[55px] text-[12px] leading-[14px] font-[400] sm:text-[14px] sm:leading-[16px] lg:ml-[25%] lg:text-[16px] lg:leading-[19px] xl:text-[14px] xl:leading-[16px]">
                  <h1 className="text-[14px] leading-[16px] font-[500] pb-[18px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[21px]">
                    Эвэнтийн тухай
                  </h1>
                  <p className={`w-full overflow-hidden text-ellipsis ${detailBtn ? "whitespace-normal" : "whitespace-nowrap"}`}>
                    {detail[0]?.about}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores molestias quidem, atque voluptates dolor! Temporibus
                    maxime quidem, rerum fuga nisi qui! Voluptas eos tempore dolor ducimus ipsa unde laboriosam!
                  </p>
                </div>
                <div className="pt-[18px] lg:ml-[25%]">
                  <button onClick={() => setDetailBtn((p) => !p)}>
                    <h1 className="text-[12px] leading-[14px] capitalize underline underline-offset-[4px] sm:text-[14px] sm:leading-[16px] lg:text-[16px] lg:leading-[19px]">
                      {detailBtn ? "Хураах" : "Дэлгэрэнгүй"}
                    </h1>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* special events */}
        <h1 className="pt-[150px] pb-[60px]">Таньд санал болгох</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-[16px] gap-y-[40px] md:gap-x-[18px] md:gap-y-[45px] lg:grid-cols-4 lg:grid-rows-1 lg:gap-[20px] 2xl:gap-[32px]">
          {special?.map((el: DETAIL_TYPE, i: number) => {
            if (i <= 3) {
              return <SpecialEventCart key={i} {...el} />;
            }
          })}
        </div>
      </div>
    </main>
  );
};

export default EventDeatil;
