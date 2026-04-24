import { toast } from "sonner";

const logError = (error: any) => {
  if (typeof error === "string") {
    return toast.error(error);
  } else if (Array.isArray(error.response?.data?.error)) {
    return toast.error(error.response?.data?.error[0].message);
  } else if (typeof error?.response?.data?.message === "string") {
    return toast.error(error.response?.data?.message);
  } else {
    return toast.error(error.message);
  }
};
export default { logError };
