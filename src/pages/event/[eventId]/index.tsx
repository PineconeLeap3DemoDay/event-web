import { useRouter } from "next/router";
import React from "react";

const EventDeatil = () => {
  const router = useRouter();
  const ro = router.query.eventId;
  return <div className="text-[#FFf]">EventDeatil{ro}</div>;
};

export default EventDeatil;
