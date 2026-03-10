import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.portalpalhoca.com.br/",
});

// export const api = axios.create({
//   baseURL: "http://localhost:3000/",
// });

api.interceptors.request.use(
  (config) => {
    const portalReferer = "www.portalflorianopolis.com.br"
    // const portalReferer = "portal1.com.br";

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
