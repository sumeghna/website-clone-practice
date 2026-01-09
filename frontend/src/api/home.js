import api from "./axios";

export const fetchHomeData = async () => {
  const { data } = await api.get("/home");
  return data;
};
