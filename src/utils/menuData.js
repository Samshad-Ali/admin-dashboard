import { IoCartOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { LuUsers2,LuUser2 } from "react-icons/lu";
import { IoReceiptOutline } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { PiSquaresFourBold } from "react-icons/pi";
import { MdOutlineNoteAlt,MdFormatAlignLeft } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineBackup } from "react-icons/md";
import { MdLogout } from "react-icons/md";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: <AiOutlineHome/>,
      },
      {
        id: 2,
        title: "Profile",
        url: "/users",
        icon: <LuUser2/>,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: <LuUsers2/>,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: <IoCartOutline/>,
      },
      {
        id: 3,
        title: "Orders",
        url: "/",
        icon: <IoReceiptOutline/>,
      },
      {
        id: 4,
        title: "Posts",
        url: "/",
        icon:<BsPostcard/>,
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: <PiSquaresFourBold/>,
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: <MdOutlineNoteAlt/>,
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon:<MdFormatAlignLeft/>
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: <FcCalendar/>,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon:<IoMdSettings/>,
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon:<MdOutlineBackup/>
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: <IoStatsChart/>,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon:<MdLogout/>,
      },
    ],
  },
];
