import axios from "axios";

// get otp => check otp => if it's a real user? => create a refresh and a access token 
// => send them to backend => we get our user => and we can understand who(user/admin/..) do what?


const BASE_URL = "http://localhost:5000/api";

// ایجاد یسری کانفیگ های کلی:
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
//----------------------------------------------------------------------------------------
// این بخش مربوط ب رفرش و اکسس توکنه:

// ارور های ما مربوط ب یکی از این دو بخشه:
// Response => err
// Request => err

// خطاهای بخش request  مهم نیس=> مثلا اینکه اینترنت کاربر قطع بشه
// ولی بخش response  مهمه

// بررسی خطاها:
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

// تو این بخش بررسی میکنم ببینیم ک حتی اگر ب ارور 401 برخورد
// بیاد دوباره اکسس توکن رو فعال کنه چونکه
// ممکنه کاربر جای حساس باشه مثلا تو صفحه پرداخت


// به طور خلاصه، این کد وقتی سرور خطای 401 (توکن منقضی شده) برمی‌گرداند
// تلاش می‌کند تا با دریافت توکن جدید، درخواست اصلی را مجدداً ارسال کند 
// و در صورت عدم موفقیت، خطا را به کاربر باز می‌گرداند.
app.interceptors.response.use(
  (res) => res,
  
  async (err) => {
    const originalConfig = err.config;

    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });

        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      
    }
    return Promise.reject(err);
  }
);
// !originalConfig._retry => برای جلوگیری از لوپ بی پایان =>ینی اولین بره ک کاربر وارد این بخش میشه
// withCredentials: true: این گزینه به سرور اجازه می‌دهد تا کوکی‌ها و اطلاعات احراز هویت را در درخواست ببیند و استفاده کند.

//--------------------------------------------------------------------------------------------------

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;

// .create =>   این متد کمک میکنه ک ما اکسیوس مربوط ب خودمون رو بسازیم

// app.interceptors.request.use(); => دو تا کال بک فانکشن میگیره
