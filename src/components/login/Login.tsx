import { useAuthContext } from "@/context";
import Image from "next/image";
import { useState } from "react";

export const Login = () => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { clickButton, sign, errorMsg, userLogin } = useAuthContext();
  const { setLoginButton } = clickButton;
  const { signIn, signUp } = sign;
  const { errorMessage } = errorMsg;
  const { isUser } = userLogin;

  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (register) {
      await signUp(email, name, name, password);
    } else {
      await signIn(email, password);
    }
  };
  return (
    <>
      <div
        onClick={() => {
          setLoginButton(false);
        }}
        className={`fixed z-20 w-full h-[100vh] px-[32px] flex items-center justify-center duration-[0.3s] ${
          isUser ? "bg-[#000000]" : " bg-[#0A000B]  sm:bg-[#0a000be4]"
        }`}
      ></div>
      <div
        className={`flexcol justify-center w-full h-full px-[32px] fixed right-0 top-0 left-0 bottom-0 m-auto z-30 duration-[0.3s] ${
          isUser && " opacity-30"
        } sm:bg-[#0A000B] sm:w-[500px] sm:py-[85px] sm:px-[55px] sm:rounded-[8px] sm:h-[645px]`}
      >
        <div className="h-[70px] flex justify-end w-full items-center md:hidden">
          {/* close icon */}
          <button
            className="flex items-center gap-[10px] justify-center"
            onClick={() => {
              setLoginButton(false);
            }}
          >
            <Image src="/otherIcons/close.svg" width={40} height={40} alt="close icon" className="rounded-[50%] w-[30px] h-[30px]" />
          </button>
        </div>
        <h1 className="text-center text-[20px] leading-[24px] mb-[40px]">{register ? "Бүртгүүлэх" : "Нэвтрэх"}</h1>
        <form method="post" onSubmit={handleSumbit}>
          <div className="w-full h-[60px] mb-[24px] relative">
            <input
              placeholder="И-мэйл"
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-full bg-[#12121F] rounded-[8px] pl-[64px] text-[#fff] text-[16px] leading-[19px] font-['Inter'] font-[300]"
            />
            <Image
              alt="Input icon"
              width={40}
              height={40}
              className="w-[30px] h-[30px] absolute top-[15px] left-[24px] opacity-60"
              src="/otherIcons/email.svg"
            />
            <div className="text-[#fff] opacity-50 text-[14px]">
              {errorMessage === "User not found" && "И-мэйл олдсонгүй та шалгаад дахин оролд нуу "}
              {errorMessage === "User already exist" && "Бүртгэлтэй И-мэйл хаяг"}
            </div>
          </div>
          {register && (
            <>
              <div className="w-full h-[60px] mb-[24px] relative">
                <input
                  placeholder="Нэр"
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-full bg-[#12121F] rounded-[8px] pl-[64px] text-[#fff] text-[16px] leading-[19px] font-['Inter'] font-[300]"
                />
                <Image
                  alt="Input icon"
                  width={40}
                  height={40}
                  className="w-[30px] h-[30px] absolute top-[15px] left-[24px] opacity-60"
                  src="/otherIcons/userName.svg"
                />
              </div>
            </>
          )}
          <div className="w-full h-[60px] mb-[8px] relative">
            <input
              placeholder="Нууц үг"
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full  bg-[#12121F] rounded-[8px] pl-[64px] text-[#fff] text-[16px] leading-[19px] font-['Inter'] font-[300]"
            />
            <Image
              alt="Input icon"
              width={40}
              height={40}
              className="w-[30px] h-[30px] absolute top-[15px] left-[24px] opacity-60"
              src="/otherIcons/password.svg"
            />
            <div className="text-[#fff] opacity-50 text-[14px]">{errorMessage === "Password incorrect" && "Нууц үг буруу"}</div>
          </div>
          <div className="text-end pb-[40px] group/item">
            <button className="">
              <span className="text-[#686873] text-[14px] leading-[16px] ">Кодоо мартсан уу?</span>
            </button>
            <div id="notWorking" className="text-[#fff] opacity-50 text-[14px] hidden mb-[-20px] group-hover/item:block ">
              Одоогоор боломгүй байгаа
            </div>
          </div>
          <div>
            <button className={`w-full h-[60px] rounded-[8px] mb-[24px] bg-[#D22366]`} type="submit">
              <h1>{register ? "Бүртгүүлэх" : "Нэвтрэх"}</h1>
            </button>
            <button onClick={() => setRegister((p) => !p)} className={`w-full h-[60px] rounded-[8px] border-[0.5px] border-[#fff]`}>
              <h1>{!register ? "Бүртгүүлэх" : "Нэвтрэх"}</h1>
            </button>
          </div>
        </form>
      </div>
      {isUser && (
        <div className="flexcol justify-center items-center fixed right-0 top-0 left-0 bottom-0 m-auto z-40 w-[325px] h-[150px] rounded-[25px] px-[25px] pb-[10px] gap-[8px] bg-[#080618]">
          <Image alt="success icon" width={30} height={30} src="/otherIcons/success.svg" className="w-[30px] h-[30px] animate-pulse" />
          <h1 className="mb-[5px]">Амжилттай {register ? "бүртгүүллээ" : "нэвтэрлээ"}</h1>
          <button
            className="w-full h-[50px] rounded-[8px] bg-[#12121F] text-[#fff]"
            onClick={() => {
              setLoginButton(false);
            }}
          >
            Хаах
          </button>
        </div>
      )}
    </>
  );
};
