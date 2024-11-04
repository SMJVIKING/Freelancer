import { useQuery } from "@tanstack/react-query";
import getCategoryApi from "../services/categoryService";

export default function useCategories() {
  const { isLoading, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  // category ما شامل اینا هست: {_id,title,entitle}
  // ولی چیزی ما نیاز داریم دریافت کنیم ازش اینا هستن : Value,label
  // پس => transform میکنیم

  const { categories: rawCategories = [] } = data || {};

  //   {value,label}
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}
