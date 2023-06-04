import Select, { StylesConfig } from "react-select";
import { BigEventCart, SpecialEventCart } from "../EventCart";
import { specialEventCarts } from "@/utils";
import { GET_CATEGORIES, GET_CATEGORY, TYPE_SEARCH } from "@/graphql";
import { useLazyQuery, useQuery } from "@apollo/client";
import Image from "next/image";
import useDay from "../hook/useDay";
import { StartDateFun } from "@/utils/date";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DETAIL_TYPE } from "@/types";
import { useLoading } from "@/context";
import { Special } from "./Special";

const breakpoints = [640, 768, 1024];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const SearchInput = ({ set, search, events }: { set: any; search: boolean; events: any }) => {
  const { tomorrow, today, lastDayOfThisWeek, lastDayOfThisMonth } = useDay();
  const [dayFilter, setDayFilter] = useState(0);
  const [dayFilterData, setDayFilterData] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState();
  const [click, setClick] = useState("");

  const { setLoading } = useLoading() as {
    setLoading: Dispatch<SetStateAction<boolean>>;
  };

  const { data, loading } = useQuery(GET_CATEGORIES);
  const [category] = useLazyQuery(GET_CATEGORY);
  const [typeSearch, { refetch }] = useLazyQuery(TYPE_SEARCH);

  const categoriesArray: object[] = [];
  data?.categories?.map((el: { id: string; name: string }) => categoriesArray.push({ id: el.id, value: el.name, label: el.name }));
  events?.map((el: DETAIL_TYPE) => {
    const thisMount = new Date(el.startDate).toISOString().slice(0, 10);
    if (lastDayOfThisMonth >= thisMount) {
    }
  });

  const FilterDay = (day: string) => {
    let testData: any = [];
    events?.map((el: { startDate: never }) => {
      const thisMount = new Date(el.startDate).toISOString().slice(0, 10);
      if (day >= thisMount) {
        return testData.push(el);
      }
    });
    setDayFilterData(testData);
    setDayFilter(testData.length);
    setInterval(() => {
      setLoading(false);
    }, 1000);
  };
  const FilterCategory = async (id: string) => {
    try {
      await category({
        variables: {
          categoryid: id,
        },
        onCompleted: (data) => {
          setDayFilterData(data.category.events);
          setDayFilter(data.category.events.length);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: any) => {
    switch (e.value) {
      case "Өнөөдөр":
        setLoading(true);
        FilterDay(today);
        return today;
      case "Маргааш":
        setLoading(true);
        FilterDay(tomorrow);
        return tomorrow;
      case "Энэ долоо хоногт":
        setLoading(true);
        FilterDay(lastDayOfThisWeek);
        return lastDayOfThisWeek;
      case "Энэ сард":
        setLoading(true);
        FilterDay(lastDayOfThisMonth);
        return lastDayOfThisMonth;
    }
  };

  // const { data: userSelectedDayEvents, refetch } = useQuery(TYPE_SEARCH, {
  //   variables: { includes: input.target.value },
  //   fetchPolicy: "no-cache",
  // });

  useEffect(() => {
    (async () => {
      try {
        await typeSearch({
          variables: {
            arg: {
              includes: input,
            },
          },
          onCompleted: (data) => {
            setDayFilterData(data.events);
            setDayFilter(data.events.length);
          },
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [input, typeSearch]);

  // useEffect(() => {
  //   (() => {
  //     switch (click) {
  //       case "/all":
  //         return setCurrent(0);
  //       case "/men":
  //         return setCurrent(2);
  //       case "/women":
  //         return setCurrent(1);
  //       case "/bag":
  //         return setCurrent(3);
  //       case "/account":
  //         return setCurrent(4);
  //       default:
  //         return setCurrent(null);
  //     }
  //   })();
  // }, [click]);

  return (
    <>
      <div className="w-full">
        <div className="w-full relative ">
          <input
            type="search"
            placeholder="Хайх"
            className="w-full bg-transparent focus:outline-none h-[33px] pl-[42px] rounded-[8px] border-[0.5px] text-[14px] border-[#C7C9CF] text-[#fff] placeholder-[#C7C9CF] md:h-[40px] md:text-[16px] 2xl:h-[60px] 2xl:text-[18px] 2xl:pl-[50px]"
            onClick={() => set(true)}
            onChange={(e) => setInput(e.target.value)}
          />
          <Image
            width={40}
            height={40}
            src="/otherIcons/search.svg"
            className="absolute top-0 bottom-0 m-auto left-[10px] w-[23px] h-[23px] 2xl:w-[35px] 2xl:h-[35px]"
            alt="search icon"
          />
        </div>
        {/* ----------------------------------------------------- */}
        <div className={`w-full pt-[24px] font-['Inter'] font-[300]   ${search ? "" : " hidden"}`}>
          <div className="lg:hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
              {!loading && (
                <>
                  <Select
                    id="long-value-select"
                    instanceId="long-value-select"
                    defaultValue={days[0]}
                    options={days}
                    styles={colourStyles}
                    onChange={handleChange}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                  <Select
                    id="long-value-select"
                    instanceId="long-value-select"
                    defaultValue={categoriesArray[0]}
                    options={categoriesArray}
                    styles={colourStyles}
                    onChange={(e: any) => FilterCategory(e.id)}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                  <Select
                    id="long-value-select"
                    instanceId="long-value-select"
                    defaultValue={countries[0]}
                    options={countries}
                    styles={colourStyles}
                    onChange={handleChange}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                  <Select
                    id="long-value-select"
                    instanceId="long-value-select"
                    defaultValue={cities[0]}
                    options={cities}
                    styles={colourStyles}
                    onChange={handleChange}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </>
              )}
            </div>
            {/* search result */}
            {dayFilter >= 1 ? (
              <>
                <h1 className="pt-[55px] pb-[24px] font-[400] text-[14px] leading-[16px] text-[#C7C9CF]">{`${dayFilter} илэрц`}</h1>
                <div className="grid grid-cols-2 grid-rows-2 gap-x-[16px] gap-y-[40px] md:gap-x-[18px] md:gap-y-[45px] lg:grid-cols-4 lg:grid-rows-1 lg:gap-[20px] 2xl:gap-[32px]">
                  {dayFilterData?.map((el: DETAIL_TYPE, i: number) => {
                    return <SpecialEventCart key={i} {...el} />;
                  })}
                </div>
              </>
            ) : (
              <div className="h-[60vh]"></div>
            )}
          </div>

          <div className={`hidden lg:block `}>
            <h1 className="text-[#fff] text-[24px] pb-[32px] pt-[80px]">Өдөр</h1>
            <div className="flexrow gap-[16px] pb-[80px] max-[1600px]:gap-[12px] max-[1600px]:pb-[60px]">
              {days.map((el, i) => {
                return (
                  <button
                    key={i}
                    className={`capitalize text-[#686873] text-[18px] bg-[#12121F] rounded-[8px] px-[24px] py-[12px] duration-[0.3s] max-[1600px]:text-[13px] max-[1600px]:p-[8px_18px] focus:bg-[#D22366] focus:text-[#fff]`}
                    onClick={(e) => {
                      handleChange(e.target);
                    }}
                    value={el.value}
                  >
                    {el.value}
                  </button>
                );
              })}
            </div>
            <h1 className="text-[#fff] text-[24px] pb-[32px] max-[1600px]:text-[18px] max-[1600px]:pb-[25px]">Категори</h1>
            <div className="flex flex-wrap gap-[16px] pb-[80px] max-[1600px]:gap-[12px]">
              {data?.categories?.map((el: { id: string; name: string }, i: number) => {
                return (
                  <button
                    key={i}
                    className={`capitalize text-[#686873] text-[18px] bg-[#12121F] rounded-[8px] px-[24px] py-[12px] duration-[0.3s] max-[1600px]:text-[13px] max-[1600px]:p-[8px_18px] focus:bg-[#D22366] focus:text-[#fff]`}
                    onClick={(e) => {
                      set(true);
                      // (async () => {})
                      FilterCategory(el.id);
                    }}
                  >
                    {el.name}
                  </button>
                );
              })}
            </div>
            {dayFilter >= 1 ? (
              <>
                <div className="grid grid-cols-4 pt-[40px] gap-x-[20px] gap-y-[30px] lg:pt-[60px] xl:gap-[60px] 2xl:pt-[75px] 2xl:gap-[80px]">
                  {dayFilterData.map((el: DETAIL_TYPE, i: number) => {
                    return <SpecialEventCart key={i} {...el} />;
                  })}
                </div>
              </>
            ) : (
              <>
                <div className="h-[70vh]"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const colourStyles: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? "#D22366" : "black",
    borderWidth: "0.5px",
    borderRadius: "8px",
    borderColor: isFocused ? "#D22366" : "#C7C9CF",
    boxShadow: "none",
    padding: 0,
    height: "33px",
    textTransform: "capitalize",
    color: isFocused ? "#fff" : "#C7C9CF",
    [mq[0]]: {
      height: "40px",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#D22366" : "black",
      borderRadius: "8px",
      color: "#fff",
    };
  },
  menuList: (styles) => ({
    ...styles,
    // padding: 0,
    backgroundColor: "#000",
    textTransform: "capitalize",
    fontSize: "12px",
    lineHeight: "14px",
    [mq[1]]: {
      fontSize: "14px",
      lineHeight: "16px",
    },
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "#FFF" : "#C7C9CF", // Custom colour
  }),
  singleValue: (styles, state: any) => ({
    ...styles,
    fontSize: "12px",
    lineHeight: "14px",
    [mq[1]]: {
      fontSize: "14px",
      lineHeight: "16px",
    },
    color: state.selectProps.changeInput,
  }),
};

const days = [
  { value: "Өнөөдөр", label: "Өнөөдөр" },
  { value: "Маргааш", label: "Маргааш" },
  { value: "Энэ долоо хоногт", label: "Энэ долоо хоногт" },
  { value: "Энэ сард", label: "Энэ сард" },
];

const countries = [{ value: "монгол", label: "монгол" }];

const cities = [{ value: "улаанбаатар", label: "улаанбаатар" }];
