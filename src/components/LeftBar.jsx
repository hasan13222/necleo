import { useState } from "react";
import images from "../assets";
import { FaArrowRightLong } from "react-icons/fa6";

const LeftBar = () => {
  const [collapseLeftBar, setCollapseLeftBar] = useState(false);
  return (
    <>
      <div
        className={`leftbar p-4 flex flex-col justify-between ${
          collapseLeftBar ? "collapsed__leftbar" : ""
        }`}
      >
        {/* left menu bar top part */}
        <div className="leftbar__top">
          <div className="projects border-y border-gray-200 py-2">
            <div className="item py-1 active">
              <a href="/" className="flex items-center">
                <img className="p-2" src={images.myProject} alt="my project" />
                <span className="text-sm">My Projects</span>
              </a>
            </div>
            <div className="item py-1">
              <a href="/" className="flex items-center">
                <img className="p-2" src={images.sample} alt="sample project" />
                <span className="text-sm">Sample Projects</span>
              </a>
            </div>
          </div>
          <div className="apps py-2">
            <div className="item py-1">
              <a href="/" className="flex items-center">
                <img className="p-2" src={images.apps} alt="Apps" />
                <span className="text-sm">Apps</span>
              </a>
            </div>
            <div className="item py-1">
              <a href="/" className="flex items-center">
                <img className="p-2" src={images.intro} alt="intro" />
                <span className="text-sm">Intro to Neclio</span>
              </a>
            </div>
          </div>
        </div>

        {/* left menu bar bottom part */}
        <div className="leftbar__btm">
          <div className="item py-1">
            <a href="/" className="flex items-center">
              <img className="p-2" src={images.help} alt="help and support" />
              <span className="text-sm">Help & Support</span>
            </a>
          </div>
          <div className="item py-1">
            <a href="/" className="flex items-center">
              <img className="p-2" src={images.feedback} alt="feedback" />
              <span className="text-sm">Feedback</span>
            </a>
          </div>
          <div className="item py-1">
            <div
              onClick={() => setCollapseLeftBar(true)}
              className="flex items-center cursor-pointer"
            >
              <img className="p-2" src={images.collapse} alt="collapse" />
              <span className="text-sm">Collapse</span>
            </div>
          </div>
        </div>
      </div>
      {/* button to expand left bar */}
      {collapseLeftBar && (
        <button
          onClick={() => setCollapseLeftBar(false)}
          className="btn bg-orange-400 expand__btn text-white"
        >
          <FaArrowRightLong />
        </button>
      )}
    </>
  );
};

export default LeftBar;
