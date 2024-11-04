import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ date, setDate, label }) {
  
  return (
    <div>
      <span className="mb-2 block text-secondary-700">{label}</span>

      <DatePicker
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}
export default DatePickerField;
