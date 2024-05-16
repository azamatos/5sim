import { axios } from "../utils";

const productService = {
  getProducts(country: string) {
    return axios({
      url: `/products/${country}/any`,
      method: "GET",
    }).then((res) => res.data);
  },
};

export default productService;
