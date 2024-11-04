// import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

function SendOTPForm({
  onSubmit,
  isSendingOtp,
  register /*onChange, phoneNumber*/,
}) {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        // value={phoneNumber}
        // onChange={onChange}
        register={register}
      />
      <div>
        {isSendingOtp ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
        {/* <Button>ارسال کد تایید</Button> */}
      </div>
    </form>
  );
}
export default SendOTPForm;

// function Button({ children }) {
//   return (
//     <button
//       className=" px-4 py-2 font-bold w-full bg-primary-900
//     text-white rounded-xl transition-all duration-300
//     hover:bg-primary-800 shadow-lg shadow-primary-300"
//     >
//       {children}
//     </button>
//   );
// }

// نکته: ببین وقتی ی کلسی زیاد تکرار میشه میتونیم 2 تا راهکارو امتحان کنیم:
// 1. اونو ب صورت کامپوننت جدا بنویسیم
//  و محتوای متنش رو هم ب صورت چیلدرن بهش بدیم و کامپوننت اصلی صرفا اونو رندر کنیم

// 2.ب این روش میگن شخصی سازی کلس های تیلویند:
// تو این روش ی اسم کلاس میدی ب اون تگ بعد میری تو فایل index.css
//  با کمک layer بهش استایل میدی

// برای ارسال رکوئست قبلا از اکسیوس استفاده میکردی
// الان از tanstack => این پکیج همه کوئری هارو مدیریت میکنه
// ن فقط اونایی ک مال ریکت هستن
