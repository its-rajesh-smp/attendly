import axiosInterceptors from "@/setup/axios.conf";
import { useEffect, useState } from "react";
import { Logger } from "../utils";

function useFetch(
  path: string,
  setLoader: (value: boolean) => void = () => {}
) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInterceptors.get(path);
        setData(response?.data);
        setLoader(false);
      } catch (error) {
        Logger.logError(error);
      } finally {
        setLoader(false);
      }
    })();
  }, [path]);

  return data;
}

export { useFetch };
