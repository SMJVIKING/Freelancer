import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  // اینجا ما میخایم بدونیم ک کدوم مورد از پروژه ها حذف میشه
  // و اگر کاربر اون پروژه رو انتخاب کنه بهش میگیم ک کوئری این پروژه دیگه
  // در دسترس نیس و ی پروژه دیگ رو انتخاب کنه:
  // برای اینکارنیاز داریم از ریکت کوئری استفاده کنیم:
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: removeProject } = useMutation({
    mutationFn: removeProjectApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isDeleting, removeProject };
}


// useQueryClient =>  ی کاستوم هوکه ک شامل تمام اطلاعات کوئری هامون هست
// invalidateQueries => این متد اون پروزه ها مد نظر رو نامعتبر میکنه 
// و پروژه های در دسترس رو نشون میده(اپدیت میکنه)