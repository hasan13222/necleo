import { useRef } from "react";
import ViewBox from "./ViewBox";
import EditBox from "./EditBox";
import Swal from "sweetalert2";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

const SingleProject = ({ project }) => {
    const editBoxRef = useRef();
    const queryClient = useQueryClient();

    const handleDelete = (e) => {
        e.stopPropagation();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FA782F",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/projects/${project._id}`).then((data) => {
                    if (data.data) {
                      queryClient.invalidateQueries({ queryKey: ["projects"] });
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });
            }
          });
    }

    const handleEditBox = (e) => {
        e.stopPropagation();
        editBoxRef.current.showModal()
    }
  return (
    <>
      {/* single project item */}
      <div onClick={() => document.getElementById(`view__${project._id}`).showModal()} className="item mr-4 mb-4 cursor-pointer bg-white p-2 rounded-md">
        <div className="img_wrapper p-3">
          <img src={project.thumbnail} alt="project thumbnail" />
        </div>
        <div className="text_wrapper flex flex-col justify-between text-center h-[112px]">
          <h3 className="text-base font-bold">{project.title}</h3>
          <div className="btns flex justify-center">
            <button onClick={() => document.getElementById(`view__${project._id}`).showModal()} className="btn btn-success m-2">View</button>
            <button onClick={handleEditBox} className="btn btn-warning m-2">Edit</button>
            <button onClick={handleDelete} className="btn btn-error m-2">Delete</button>
          </div>
        </div>
      </div>

      {/* view details */}
        <dialog id={`view__${project._id}`} className="modal">
            <ViewBox project={project}/>
        </dialog>

      {/* edit project details */}
        <dialog ref={editBoxRef} id={`edit__${project._id}`} className="modal">
            <EditBox reference={editBoxRef} project={project}/>
        </dialog>
    </>
  );
};

export default SingleProject;
