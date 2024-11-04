function TitleField({
  label,
  name,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className="textField">
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {required && <span className="text-error">*</span>}
      </label>

      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        className="textField__input"
      />

      {/* نمایش پیام خطا در صورت وجود */}
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TitleField;

// {...register(name,{required:true})} =>
// ببین اینجا ریکوایرد رو ترو میزاره ینی اگه کاربر این فیلد رو پر نکنه بهش خطا بده

// errors[name] => این بخش اسم ک گذاشتم تو براکت واسه اینه ک
// اسم باید داینامیک باشه نمیشه title,description و.. گذاشت
