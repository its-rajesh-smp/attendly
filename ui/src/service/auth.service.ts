import axiosInterceptors from "@/setup/axios.conf";

const fetchUser = () => axiosInterceptors.get(`/user/me`);

const createAccount = (data: any) =>
  axiosInterceptors.post("/user/register", data);

const login = (data: any) => axiosInterceptors.post("/user/login", data);

export default {
  fetchUser,
  createAccount,
  login,
};
