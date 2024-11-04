import http from "./httpService";

export default function getCategoryApi() {
  return http.get("/category/list")
  .then(({ data }) => data.data);
}