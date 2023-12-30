import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import CreateProject from "./CreateProject";
import SingleProject from "./SingleProject";

const Body = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: projects,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      fetch(
        `http://localhost:5000/projects`
      ).then((res) => res.json()),
  });

  return (
    <>
      <div className="body p-5 px-10">
        <h2 className="font-bold text-3xl mb-6">My Projects</h2>
          {error && <h3>{error.message} Please refresh again.</h3>}
        <div className="items flex flex-wrap">
          {isLoading && isFetching && (
            <span className="loading loading-ring loading-lg"></span>
          )}
          {projects?.map((project) => (
            <Fragment key={project._id}>
              {/* created projects will be rendered here */}
              <SingleProject project={project} />
            </Fragment>
          ))}
          {/* from create project user can create new project */}
          <CreateProject/>
        </div>
      </div>
    </>
  );
};

export default Body;
