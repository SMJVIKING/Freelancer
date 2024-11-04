import { useState } from "react";
import SendOTPForm from "../authentication/SendOTPForm";
import CheckOTPForm from "../authentication/CheckOTPForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data,
  } = useMutation({
    mutationFn: getOtp,
  });
  // isPending=isLoading
  const sendOtpHandler = async (data) => {
    try {
      const {message} = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const { register, handleSubmit,getValues } = useForm();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
            // onSubmit={sendOtpHandler}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={data}
            onResendOtp={sendOtpHandler}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm space-y-12">{renderStep()}</div>;
}
export default AuthContainer;

// onBack={() => setStep(1)} or onBack={() => setStep((s)=>s-1)}


// getValues => میگه ولیو چ فیلدی رو میخای تا اون ولیو رو بهت بدم