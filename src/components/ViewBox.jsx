
const ViewBox = ({project}) => {
  return (
    <>
        <div className="modal-box w-80 md:w-[550px] max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* project details */}
          <div className="project_details mt-1 py-4 text-center">
            <div className="img_wrapper">
                <img className="max-h-52 w-full object-contain rounded-lg" src={project.thumbnail} alt="thumbnail" />
            </div>
            <h3 className="font-bold text-2xl pt-2 pb-3">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
    </>
  )
}

export default ViewBox