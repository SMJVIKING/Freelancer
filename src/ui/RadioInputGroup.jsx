import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            id={value}
            value={value}
            name={name}
            label={label}
            watch={watch}
            register={register}
            validationSchema={validationSchema}
            errors={errors}
            // onChange={(e) => setRole(e.target.value)}
          />
        ))}
      </div>
      {errors && errors[name] && <span className="text-error block text-sm mt-2 flex-1">{errors[name]?.message}</span>}
    </div>
  );
}
export default RadioInputGroup;
