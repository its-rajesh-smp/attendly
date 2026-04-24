import type { AppDispatch } from "@/hooks";
import { authenticate, logout } from "@/reducers";
import { AuthService } from "@/service";
import { setAuthTokenOnAxiosInterceptor } from "@/setup/axios.conf";

export const loginAct = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    const response = await AuthService.login(formData);
    const { authToken, user } = response.data;
    dispatch(authenticate({ authToken, user }));
  };
};

export const registerAct = (formData: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    const response = await AuthService.createAccount(formData);
    const { authToken, user } = response.data;
    dispatch(authenticate({ authToken, user }));
  };
};

export const fetchUserAct = () => {
  return async (dispatch: AppDispatch) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) return false;
    setAuthTokenOnAxiosInterceptor(authToken);
    try {
      const response = await AuthService.fetchUser();
      const { user } = response.data;
      dispatch(authenticate({ user, authToken }));
    } catch (error) {
      dispatch(logout());
    }
  };
};
