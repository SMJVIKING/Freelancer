import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import toast from "react-hot-toast";
import { checkOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";

const RESEND_TIME = 60;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate("");
  const [time, setTime] = useState(RESEND_TIME);

  const { isPending, data, error, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return navigate("/complete-profile");
      // return => برای اینه ک اگه کاربر اکتیو نبود پردازش اونجا متوقف بشه و جلوتر نره
      if (user.status !== 2) {
        // navigate("/");
        // navigate("/complete-profile");
        toast.error("پروفایل شما در انتظار تایید است", { icon: "👏🏻" });
        return;
      }

      if (user.role === "OWNER") navigate("/owner");
      if (user.role === "FREELANCER") navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((s) => s - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>

      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          <span> {otpResponse?.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}

      <div className="mb-4 text-secondary-800">
        {time > 0 ? (
          <p> {time}ثانیه تا ارسال مجدد کد </p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>

      <form className="space-y-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex justify-center flex-row-reverse gap-x-2 "
          inputStyle={{
            outline: "none",
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
          {/* <Button>ارسال کد تایید</Button> */}
        </div>
      </form>
    </div>
  );
}
export default CheckOTPForm;

// این ی پکیجه نصب میکینم و بعد پراپس هارو طبق داکیومنت میزاریم
// containerStyle => استایل همه اینپوت ها
// inputStyle => استایل تک اینپوت

// flex-row-reverse =>  برای اینه ک اعداد از چپ ب راست تایپ بشن

// containerStyle="flex justify-center flex-row-reverse gap-x-2 "
// inputStyle={{
//   width: "2.5rem",
//   padding: "0.5rem 0.2rem",
//   border: "1px solid rgb(var(--color-primary-400))",
//   borderRadius: "0.5rem",
// }}
// نکته: استایل دهی تو این کتابخونه میتونه ب صورت ابجکت باشه یا هم داخل دابل کوتیشن
