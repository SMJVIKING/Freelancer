import  Select  from "../ui/Select";
import { useSearchParams } from "react-router-dom";

function FilterDropDown({ filterField, options }) {
  // querystring:
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";

  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    // update:
    setSearchParams(searchParams);
  }

  return <Select
  options={options}
  onChange={handleChange}
  value={value} />;
}
export default FilterDropDown;
