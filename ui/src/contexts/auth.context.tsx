import { useAppDispatch } from "@/hooks";
import { Dto, Logger } from "@/utils";
import { createContext, useState, type ReactNode } from "react";
import { loginAct, registerAct } from "../actions/auth.act";
import { AuthDto } from "../dtos";
import type { IUserInput } from "../types/user.type";

interface IAuthContext {
  handleLogin: (e: React.FormEvent) => void;
  handleSignup: (e: React.FormEvent) => void;
  togglePasswordVisibility: () => void;
  isPasswordVisible: boolean;
  userInput: IUserInput;
  setUserInput: React.Dispatch<React.SetStateAction<IUserInput>>;
  loading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  handleLogin: () => {},
  handleSignup: () => {},
  togglePasswordVisibility: () => {},
  isPasswordVisible: false,
  userInput: { email: "", password: "" },
  setUserInput: () => {},
  loading: false,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [userInput, setUserInput] = useState<IUserInput>({
    email: "",
    password: "",
    name: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = Dto.validateInput(AuthDto.userLoginSchema, userInput);
    if (!payload) return;
    setLoading(true);
    try {
      await dispatch(loginAct(userInput));
    } catch (error) {
      Logger.logError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = Dto.validateInput(AuthDto.userSignupSchema, userInput);
    if (!payload) return;
    try {
      setLoading(true);
      await dispatch(registerAct(userInput));
    } catch (error) {
      Logger.logError(error);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleSignup,
        togglePasswordVisibility,
        isPasswordVisible,
        userInput,
        setUserInput,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
