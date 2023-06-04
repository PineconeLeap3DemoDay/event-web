import { useLoading } from "@/context";
import { Dispatch, SetStateAction, useEffect } from "react";

export const LoadingFun = (props: { loading: boolean }) => {
  const { setLoading } = useLoading() as {
    setLoading: Dispatch<SetStateAction<boolean>>;
  };
  useEffect(() => {
    if (!props.loading) {
      setLoading(false);
    }
  }, [props.loading, setLoading]);
};
