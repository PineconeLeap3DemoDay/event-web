import { SIGN_IN, SIGN_UP } from "@/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const Auth = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<object | null>(null);
  const [isUser, setIsUser] = useState(false);
  const [loginButton, setLoginButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const [signinGQL, { data, loading, error }] = useMutation(SIGN_IN);
  const [signupGQL] = useMutation(SIGN_UP);

  const signIn = async (email: string, password: string) => {
    try {
      await signinGQL({
        variables: {
          email,
          password,
        },
        onCompleted: (data) => {
          if (data) {
            const res = data.signin;
            localStorage.setItem("token", res.token);
            setToken(res.token);
            setIsUser(true);
            setUserInfo(data.signin.user);
          }
        },
      });
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  };

  const signUp = async (email: string, firstName: string, lastName: string, password: string) => {
    try {
      await signupGQL({
        variables: {
          user: {
            email,
            firstName,
            lastName,
            password,
          },
        },
        onCompleted: (data) => {
          if (data) {
            const res = data.signup;
            localStorage.setItem("token", res.token);
            setToken(res.token);
            setUserInfo(res.user);
            setIsUser(true);
          }
        },
      });
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  };

  const logout = async () => {
    await localStorage.removeItem("token");
    setLoginButton((p) => (p = false));
    setToken(null);
    setUserInfo(null);
    setIsUser(false);
  };

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUser(true);
      setToken(token as string);
    } else {
      setIsUser(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, [isUser]);

  const state = {
    userLogin: { isUser, setIsUser },
    clickButton: { loginButton, setLoginButton },
    sign: { signIn, signUp, logout },
    data: { userInfo, setUserInfo },
    errorMsg: { errorMessage, setErrorMessage },
  };
  return <Auth.Provider value={state}>{children}</Auth.Provider>;
};

export const useAuthContext = () => useContext(Auth);
