import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfileOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { isPending, mutateAsync} = useMutation({
    mutationFn: completeProfileOtp,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);

      if (user.status !== 2) {
        navigate("/home");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏🏻" });
        return;
      }
      if (user.role === "OWNER") navigate("/owner");
      if (user.role === "FREELANCER") navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
          className="text-secondary-400"
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
            // onChange={(e) => setName(e.target.value)}
            // value={name}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "ایمیل نامعتبر است.",
              },
            }}
            errors={errors}
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
          />
          <RadioInputGroup
            watch={watch}
            errors={errors}
            register={register}
            // این ابجکت رو خودم درست کردم خود پکیج نداره:
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                {
                  value: "FREELANCER",
                  label: "فریلنسر",
                },
              ],
            }}
          />

          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full">تایید</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;

// phonenumber =>
// send otp =>
// after than check to know is that user real user or not=>
// if he/she is a real user =>
// so go to completed profile =>
// if not so go to home page to get new otp

// completed profile page =>
// if user logined before =>check the status=>
// so go in here/his page(owner/freelancer/admin)=>

// if her/his username dosen't exist =>
// check the status =>push this user to panel

// متد getvalues => وقتی تغییری ایجاد میکنیم
//  باعث ری رندر شدن اینپوت نمیشه
// getvalues & watch =>هردوتا عملشون شبیه همه
//  ولی گت ولیوز بهینه تره
//  =>ولی=>
//   متد واچ میتونه اینپوت رو ری رندر گنه
