import axios, { type AxiosRequestConfig } from "axios";
type paramType = Record<string, string>;

const createRequest = async <T>(
  method: string,
  url: string,
  params: paramType = {},
  body?: T
) => {
  const options: AxiosRequestConfig = {
    method,
    auth: {
      password: import.meta.env.CONSUMER_SECRET,
      username: import.meta.env.CONSUMER_KEY,
    },
    url: new URL(
      import.meta.env.ADMIN_URL +
        "/wp-json/wc/v3" +
        url +
        "?" +
        new URLSearchParams(params).toString()
    ).toString(),
    data: body,
  };
  try {
    return await axios.request(options);
  } catch (error) {
    console.log("Error in woocommerce api");
    return { data: null };
  }
};

export default {
  async get(endpoint: string, params?: paramType) {
    return await createRequest("GET", endpoint, params);
  },
};
