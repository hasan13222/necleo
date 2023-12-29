import axios from "axios";
import images from "../assets";
import { ToastContainer, toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import 'react-toastify/dist/ReactToastify.css';

const CreateProject = () => {
  const notify = () => toast("Project Added Successfully");
  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.project_title.value;
    const description = form.project_description.value;
    const thumbnail = form.project_thumbnail.value;
    const newProject = {
        title,
        description,
        thumbnail
    }

    axios.post("http://localhost:5000/projects", newProject)
      .then((data) => {
        if (data.data) {
          queryClient.invalidateQueries({ queryKey: ["projects"] });
          notify();
          form.reset();
          document.getElementById("addProject_modal").close()
        }
      });
  };
  return (
    <>    
        
    <ToastContainer />
      <div
        onClick={() => document.getElementById("addProject_modal").showModal()}
        className="item cursor-pointer bg-white p-2 mb-4 rounded-md"
      >
        <div className="img_wrapper p-3">
          <img src={images.createBg} alt="create bg" />
        </div>
        <div className="text_wrapper text-center">
          <h3 className="text-base font-bold">Create a New Project</h3>
          <p className="text-xs font-semibold mt-1">
            or try a <span className="orange">sample project</span>
          </p>
        </div>
      </div>

      {/* form to add project */}
      <dialog id="addProject_modal" className="modal">
        <div className="modal-box w-96 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form
            className="flex mx-auto justify-center flex-col gap-2 px-5"
            onSubmit={handleSubmit}
          >
            <div className="item flex flex-col gap-1">
              <label htmlFor="project_title" className="pl-1">Project Title</label>
              <input
                name="project_title"
                required
                type="text"
                placeholder="Write your title here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="item flex flex-col gap-1">
              <label htmlFor="project_description" className="pl-1">
                Project description
              </label>
              <textarea
                required
                className="input input-bordered w-full"
                name="project_description"
                placeholder="Write Description Here"
                cols="30"
                rows="7"
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
                placeholder="Paste a photo url"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="item flex flex-col gap-1">
              <input
                className="input input-bordered w-full bg-sky-900 cursor-pointer text-white hover:opacity-90"
                type="submit"
                value="Add"
              />
            </div>
          </form>
        </div>
      </dialog>
      
    
    </>
  );
};

export default CreateProject;
