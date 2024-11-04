// to create one project we need:
// 1.title :str
// 2.category : select option
// 3.deadline :date picker
// 4.desc : str
// 5.tags :multi input
// 6.budget : num
//..............................................................................
// validation: اعتبار سنجی
// مثلا وقتی سایت میگه نام باید بیشتر از 8 کارکتر نباشه
// یا مثلا پسورد شامل حروف بزرگ و کوچک و.. باشه
// ..............................................................................
// type of validation :
// front-end :neccerry =>ولی اعتبارسنجی سمت فرانت هم لازمه برای جلوگیری از یسری اتفاقات و دراخواست های اضافی
// back-end :باید از سمت بک اند ما اعتبارسنجی رو انجام بدیم حتما
// ..............................................................................
// بهترین و مهم ترین نوع اعتبار سنجی=> اعتبارسنجی بک انده
// و اعتبارسنجی فقط از طرف فرانت هیچ وقت کافی نیست
// ..............................................................................
// اینحا برای اعتبارسنجی از این ابزار استفاده میشه:react-hook-form
// چرا؟چون
// 1.کدهاش اسونن
// 2.بهینه هستن

// formik هم ی ابزار دیگس

//..............................................................................
// what react-hook-form does?
// 1.manage state(so we dont need to use useState)
// 2.submit form
// 3.validation
//..............................................................................
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject.js";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    descrition,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      descrition,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });
  // چون برای این بخش از ریکت هوک فرم استفاده نمیکنیم پس استیت تعریف میکنیم:
  // واسه این تگ TagsInput
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />

      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />

      <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
          minLength: {
            value: 4,
            message: "حداقل 4 کاراکتر وارد کنید",
          },
        }}
        errors={errors}
      />
      <RHFSelect
        name="category"
        label="دسته بندی"
        register={register}
        required
        options={categories}
      />

      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>

      <DatePickerField date={date} setDate={setDate} label="ددلاین" />

      <div className="!mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;

// تو react-hook-form => register =>جایگزین برای onchange , value میشه
// register fn :این فانکشن رو ب جای ولیو و انچینج و.. استفاده میکنیم

// formState fn :این فانکشن شامل پراپرتی های زیادی هست و
// ما ارور رو لازم داریم ازش پس اونو دیسراکچر میکنیم
