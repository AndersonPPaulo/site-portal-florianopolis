import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.portalpalhoca.com.br/",
});

api.interceptors.request.use(
  (config) => {
    const portalReferer = "www.portalflorianopolis.com.br";

    // Adiciona o parâmetro portalReferer aos query params
    if (!config.params) {
      config.params = {};
    }

    config.params.portalReferer = portalReferer;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
