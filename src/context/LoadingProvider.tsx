import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

const Loading = createContext<{
  loading: boolean;
  search: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(true);

  return <Loading.Provider value={{ loading, setLoading, search, setSearch }}>{children}</Loading.Provider>;
};

export const useLoading = () => useContext(Loading);
