import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({data})=>data.data);
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({data})=>data.data);
}

export function completeProfileOtp(data) {
  return http.post("/user/complete-profile", data).then(({ data }) => data.data);
}

export function getUser(data) {
  return http.get("/user/profile",data).then(({ data }) => data.data);
}

export function logoutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

// data=> it's an object
