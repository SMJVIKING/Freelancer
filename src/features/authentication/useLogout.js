import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../services/authService";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // برای اینکه کل کوئری هارو ریمو کنه:
      queryClient.removeQueries();
      //   ریپلیس ترو واسه اینه ک قابلیت برگشت ب این صفحه رو نداشته باشه:
      navigate("/auth", { replace: true });
    },
  });
  return { isLoading, logout };
}
