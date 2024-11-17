import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
// import queryStg from "query-string";

export default function useProjects() {
  const { search } = useLocation();
  //1. use querystring with querystring package:
  // const queryObject = queryString.parse(search);

  //2. use querystring without need to use querystring package:
  const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { data, isLoading } = useQuery({
    // 1.اینجا میگیم بر اساس کوئری استرینگ ها رکوئست میفرسته
    queryKey: ["projects", queryObject],
    // 2.با چی رکوئست بده ؟ با سرچ
    queryFn: () => getProjectsApi(search),
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
