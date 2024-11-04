function RadioInput({
  name,
  id,
  value,
  label,
  validationSchema,
  watch,
  register,
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        className="cursor-pointer w-4 h-4 form-radio text-blue-500 focus:ring-blue-500"
        name={name}
        id={id}
        value={value}
        // onChange={onChange}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
export default RadioInput;

// accent-red-400 => این بخش برا اینه ک اون قسمت رینگ دور اون دایره ردیو باتن هم رنگش عوض بشه

// form-radio text-green-400 focus:ring-green-400 => اینا رو از پکیجپلاگین فرم اوردیم برای استایل دهی ب همون ردیو باتن
// استفاده از این پکیج ضروری نیس ولی قشنگ میکنه پروزه رو
