import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import useChangeUserStatus from "./useChangeUserStatus";
import RHFSelect from "../../../ui/RHFSelect";
import Loading from "../../../ui/Loading";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeUserStatus } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data }, //{ userId, data :{status:0,1,2}}
      // نکته پایین صفحه=>
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          register={register}
          options={options}
          label="تغییر وضعیت"
          required
        />
        <div className="!mb-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="mt-8 btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
export default ChangeUserStatus;

// { userId, ...data }=>چرا اینجوری ننوشتیم با اسپرید اوپریتور؟
// چون وقتی اسپرید اوپریتور میزنیم=> اونوقت باید خود مقدار استیتوس رو به ای پی ای پاس بدیم و ب صورت ابجکت هم پاس بدیم
// export function changeUserStatusApi({ userId, status }) {
//   return http
//     .patch(`/admin/user/verify/${userId}`, {status})
//     .then(({ data }) => data.data);
// }
