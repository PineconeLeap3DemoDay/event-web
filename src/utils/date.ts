import { DETAIL_TYPE } from "@/types";

export const StartDateFun = (props: number) => {
  const startDate = new Date(props).toISOString().slice(0, 10).split("-");
  return startDate;
};

export const UpcommingDate = (propsCon: DETAIL_TYPE) => {
  let lowDays: string[] = [];
  const date = Date.now();
  const thisMount = new Date(date).toISOString().slice(0, 10).split("-")[1];
  const sameMonth = propsCon?.filter((el: DETAIL_TYPE) => StartDateFun(el.startDate)[1] === thisMount);

  const LowDays = (data: any) => {
    let daysArr: any[] = [];
    let newDate: string[] = [];
    data?.map((el: DETAIL_TYPE) => daysArr.push(StartDateFun(el.startDate)[2]));
    if (daysArr.length === 0) {
      return;
    }
    let less : any = daysArr?.reduce((a, b) => Math.min(a, b));
    data?.map((el : any) => {
      if (StartDateFun(el.startDate)[2] == less) {
        if (lowDays.length === 4) {
          return;
        }
        lowDays.push(el);
      }
    });
    lowDays.map((el : any) => newDate.push(data.filter((ele: any) => ele.id !== el.id)));
    if (lowDays.length === 4) {
      newDate = [];
      return;
    } else {
      LowDays(newDate[newDate.length - 1]);
    }
  };
  LowDays(sameMonth);

  return lowDays;
};
