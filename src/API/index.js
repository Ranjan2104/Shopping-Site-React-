import axios from "axios";

export const ProductData = {
  getData: async(data) => await axios.get(data.url)
}