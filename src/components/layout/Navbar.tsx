import { useAuthContext, useLoading } from "@/context";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const { userLogin, clickButton, data, sign, errorMsg } = useAuthContext();
  const { setSearch } = useLoading() as {
    setSearch: Dispatch<SetStateAction<boolean>>;
  };

  const { isUser } = userLogin;
  const { setLoginButton } = clickButton;
  const { userInfo } = data;
  const { logout } = sign;

  const router = useRouter();

  // hide navigation bar functionality
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScroll = () => {
      const scrollY = window.pageYOffset;
      if (lastScrollY > scrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = scrollY;
      setNavbar(window.pageYOffset > 40);
    };
    window.addEventListener("scroll", updateScroll); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScroll); // clean up
    };
  }, [show]);

  return (
    <>
      <header
        className={`w-full items-center fixed top-0 left-0 right-0 z-10 h-[70px] duration-[0.3s] ${navbar && "bg-[#0A000B]"} ${
          show && "top-[-70px] xl:top-[-80px]"
        } `}
      >
        <div className="w-full h-full flexrow justify-between items-center max-w-[1920px] m-auto px-[32px] lg:px-[45px] xl:h-[80px] 2xl:px-[60px]">
          <button
            onClick={() => {
              router.push("/");
              setSearch(false);
            }}
            className="uppercase font-['Roboto'] font-[600] lg:text-[24px] lg:leading-[28px]  2xl:text-[28px] 2xl:leading-[32px] "
          >
            <h1>UB EVENTS</h1>
          </button>
          {/* hamburger */}
          <>
            <button
              onClick={() => {
                setDropDown(true);
                setNavbar(true);
              }}
              className="lg:hidden"
            >
              <Image alt="hamburger menu icon" width={30} height={30} src="/otherIcons/hamburgerMenu.svg" className="w-[30px] h-[30px]" />
            </button>
            {isUser ? (
              <button onClick={() => setDropDown(true)} className="gap-[16px] items-center hidden lg:flexrow">
                <div className="w-[35px] h-[35px]">
                  <Image alt="profile imgage" width={40} height={40} className="w-full h-full rounded-[50%]" src="/otherIcons/userName.svg" />
                </div>
                <h2 className="font-['Inter'] font-[300] text-[18px] leading-[21px]">{userInfo?.firstName}</h2>
                <Image
                  src="/otherIcons/navbar-arrowDown.svg"
                  width={30}
                  height={30}
                  alt="user avatar"
                  className={`w-[30px] h-[30px] duration-[0.3s] ml-[-5px] ${dropDown ? "rotate-[-180deg]" : "rotate-0"}
              max-[1600px]:w-[20px] max-[1600px]:h-[20px]`}
                />
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setLoginButton(true);
                  }}
                  className="hidden lg:block xl:text-[18px] 2xl:text-[21px]"
                >
                  <h1>Нэвтрэх</h1>
                </button>
              </>
            )}
          </>
        </div>
      </header>
      <div
        className={`fixed z-10 w-[100vw] h-[100vh] duration-[0.5s] translate-y-[-100%] px-[32px] bg-[#0A000B] ${
          dropDown && "translate-y-[0px] "
        }  lg:w-[310px] lg:h-[370px] lg:right-0 lg:rounded-bl-[8px] lg:pr-[16px] min-[2140px]:right-[5%] min-[2380px]:right-[10%] min-[2690px]:right-[15%]`}
      >
        {/* ___________ close navbar ___________*/}
        <div className="h-[70px] flex justify-end w-full items-center lg:h-[50px]">
          <button
            className="flex items-center gap-[10px] justify-center"
            onClick={() => {
              setDropDown(false);
              setNavbar(false);
            }}
          >
            <Image
              src="/otherIcons/close.svg"
              width={40}
              height={40}
              alt="user avatar"
              className="rounded-[50%] w-[40px] h-[40px] max-[1600px]:w-[30px] max-[1600px]:h-[30px]"
            />
          </button>
        </div>
        {/* ___________ name and profile image ___________*/}
        {isUser ? (
          <>
            <div className="flexrow gap-[16px] items-center lg:gap-[10px]">
              <div className="w-[35px] h-[35px] lg:w-[30px] lg:h-[30px]">
                <Image alt="profile imgage" width={40} height={40} className="w-full h-full rounded-[50%]" src="/otherIcons/userName.svg" />
              </div>
              <h2 className="font-['Inter'] font-[300] text-[18px] leading-[21px] lg:text-[16px] lg:leading-[19px]">{userInfo?.firstName}</h2>
            </div>
            {/* ___________ other buttoms ___________*/}
            <div className="flexcol pt-[55px] gap-[16px] lg:pt-[30px] ">
              {list.map((el, i) => {
                return (
                  <div key={i}>
                    <button className={``} onClick={() => router.push(el.path)}>
                      <h2 className="text-[18px] leading-[21px] lg:text-[16px] lg:leading-[19px]">{el.title}</h2>
                    </button>
                  </div>
                );
              })}
              <div className="pt-[20px] lg:pt-[10px]">
                <button
                  className="flexrow items-center gap-[20px]"
                  onClick={() => {
                    logout();
                    setDropDown(false);
                  }}
                >
                  <Image
                    alt="logout icon"
                    width={30}
                    height={30}
                    src="/otherIcons/logout.svg"
                    className="w-[30px] h-[30px] lg:w-[25px] lg:h-[25px]"
                  />
                  <h2 className="text-[18px] leading-[21px] lg:text-[16px] lg:leading-[19px]">Гарах</h2>
                </button>
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={() => {
              // setDropDown(false);
              setLoginButton(() => true);
            }}
          >
            <h1>Нэвтрэх</h1>
          </button>
        )}
      </div>
    </>
  );
};

const list = [
  { path: "/", title: "Хадгалсан" },
  { path: "/", title: "Тасалбар" },
  { path: "/", title: "Календар" },
  { path: "/", title: "Тохиргоо" },
  { path: "/", title: "Эвэнт үүсгэх" },
];
