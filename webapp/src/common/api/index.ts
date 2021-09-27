import axios from "axios";

export const ping = (baseUrl: string) =>
  axios.get(`${baseUrl}/api/ping`).then((res) => res.data);
