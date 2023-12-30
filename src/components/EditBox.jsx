import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBox = ({ project, reference }) => {
  const notify = () => toast("Project Updated Successfully");
  const queryClient = useQueryClient();

  // project editing handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.project_title.value;
    const description = form.project_description.value;
    const thumbnail = form.project_thumbnail.value;
    const updateProject = {
      title,
      description,
      thumbnail,
    };

    axios.patch(`https://seequenze-server.vercel.app/projects/${project._id}`, updateProject).then((data) => {
      if (data.data) {
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        notify();
        form.reset();
        reference.current.close();
      }
    });
  };
  return (
    <>
        <div className="modal-box w-96 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* form to edit project */}
          <form
            className="flex mx-auto justify-center flex-col gap-2 px-5"
            onSubmit={handleSubmit}
          >
            <div className="item flex flex-col gap-1">
              <label htmlFor="project_title" className="pl-1">
                Project Title
              </label>
              <input
                name="project_title"
                required
                defaultValue={project.title}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="item flex flex-col gap-1">
              <label htmlFor="project_description" className="pl-1">
                Project description
              </label>
              <textarea
                required
                defaultValue={project.description}
                className="input input-bordered w-full h-20"
                name="project_description"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="item flex flex-col gap-1">
              <label htmlFor="project_thumbnail" className="pl-1">
                Project Thumbnail url
              </label>
              <input
                name="project_thumbnail"
                pattern="https?://.+"
                title="please give photo url"
                type="text"
                defaultValue={project.thumbnail}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="item flex flex-col gap-1">
              <input
                className="input input-bordered w-full bg-sky-900 cursor-pointer text-white hover:opacity-90"
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
    </>
  );
};

export default EditBox;
