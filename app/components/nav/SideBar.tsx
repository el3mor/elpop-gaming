import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import Logo from "../(default)/Logo";
import SideLink from "./SideLink";

export const NAVLink = [
  {
    label:"Home",
    link:"/",
    icon:<GoHomeFill />
  },
  {
    label:"Games",
    link:"/games",
    icon:<MdDashboard />
  },
  {
    label:"Wishlist",
    link:"/wishlist",
    icon:<FaHeart />
  }
]

const SideBar = () => {

  return (
    <div className="col-span-2 min-h-screen">
      <div className="h-full bg-black/30 text-gray-50 py-6 px-7">
        <Logo />

          <div className="mt-auto flex p-4 flex-col justify-between ">
            {NAVLink.map((navbar, index) => (
              <SideLink key={index} navbar={navbar} />
            ))}
          </div>

      </div>
    </div>
  )
}

export default SideBar
