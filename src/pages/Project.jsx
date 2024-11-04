import ProjectHeader from "../features/project/ProjectHeader";
import ProposlasTable from "../features/project/ProposalsTable";
import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";

function Project() {
  const { isLoading, project } = useProject();

  if (isLoading) return <Loading />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposlasTable proposals={project.proposals}/>
    </div>
  );
}
export default Project;

// useParams:
// فقط زمانی کار می‌کند که مسیر URL
//  شما دارای پارامترهای پویا باشد و کامپوننت شما درون یک
//  `<Route>` قرار گرفته باشد که این پارامتر را تعریف کرده است.
