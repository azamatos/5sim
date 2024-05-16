import { axios } from "../utils";

const countryService = {
  getCountries() {
    return axios({
      url: "/countries",
      method: "GET",
    }).then((res) => res.data);
  },
};

export default countryService;
