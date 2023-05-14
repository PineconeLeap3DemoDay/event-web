import { useChangesNavbarSearch } from "@/context";

export const Footer = () => {
  const { search } = useChangesNavbarSearch() as { search: boolean };
  return (
    <div className={`pt-[200px] text-[#686873] pb-[80px]  max-[1600px]:p-[150px_0_60px] ${search ? "hidden" : ""}`}>
      <h1 className="text-center text-[24px]  max-[1600px]:text-[18px]">Pinecone Academy &nbsp;|&nbsp; Leap Team 3</h1>
    </div>
  );
};
