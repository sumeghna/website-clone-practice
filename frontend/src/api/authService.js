import api from "./axios";

// LOGIN
export const login = async (email, password) => {
  const { data } = await api.post("/auth/login", { email, password });

  // ✅ store correctly
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data.user;
};

// REGISTER
export const register = async (name, email, password) => {
  const { data } = await api.post("/auth/register", {
    name,
    email,
    password,
  });

  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data.user;
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
