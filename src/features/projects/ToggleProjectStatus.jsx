import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  //   const [enabled, setEnabled] = useState(
  //     project.status === "OPEN" ? true : false
  //   );
  // enabled => ی درایود استیت هست ک میتونه از استیت های دیگه(project.status) 
//   مشتق بشه ینی نیاز نیس ک استیت جدید تعریف بشه پس=>
  const enabled = project.status === "OPEN" ? true : false;

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSE" : "OPEN";
    toggleProjectStatus(
      { data: { status }, id: project._id }
      //   {
      //     // این بخش میگه اگر درخواست موفقیت امیز بود بیا و این کار رو انجام بده:
      //     // و کاری ک میگه اینه=> اگر قبلا باز بود ببندش اگر بسته بود بازش کن پروژه رو
      //     onSuccess: () => {
      //       setEnabled((prev) => !prev);
      //     },
      //   }
    );
  };

  return (
    <div className="w-[5rem">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          onChange={toggleHandler}
          enabled={enabled}
          label={project.status === "OPEN" ? "باز" : "بسته"}
        />
      )}
    </div>
  );
}
export default ToggleProjectStatus;
