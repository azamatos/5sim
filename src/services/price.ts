import { axios } from "../utils";

const priceService = {
  getPrices(params: Price.Filter): Promise<Price.Items> {
    return axios({
      method: "GET",
      url: "/prices",
      params,
    }).then((res) => res.data);
  },
};

export default priceService;
