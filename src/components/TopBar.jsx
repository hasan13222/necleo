import logo from "/images/logo.png";
import profileImg from "/images/profile.png";
import { FaCaretDown } from "react-icons/fa";
const TopBar = () => {
  return (
    <>
        <div className="container mx-auto topbar">
          {/* logo section */}
        <div className="logo__wrapper">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        {/* right side section of topbar */}
        <div className="trial__wrapper flex">
          <div className="trial">
            <div className="trial__free">
              <h3 className="text-sm font-bold">Free Trial | <span className="font-normal">2 days left</span></h3>
            </div>
            <div className="trial__extend">
              <a className="orange font-semibold" href="/">Extend Free trial</a>
            </div>
          </div>
          <div className="profile flex items-center cursor-pointer">
            <div className="profile_image mr-2">
              <img src={profileImg} alt="profile image" />
            </div>
            <FaCaretDown />
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar