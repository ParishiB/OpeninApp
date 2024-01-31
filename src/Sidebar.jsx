import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  const side_data = [
    {
      name: "Dasboard",
      Icon: <MdDashboard />,
    },
    {
      name: "Upload",
      Icon: <FaFileUpload />,
    },
    {
      name: "Invoice",
      Icon: <FaFileInvoice />,
    },
    {
      name: "Schedule",
      Icon: <AiFillSchedule />,
    },
    {
      name: "Calender",
      Icon: <SlCalender />,
    },
    {
      name: "Notification",
      Icon: <IoIosNotifications />,
    },
    {
      name: "Settings",
      Icon: <IoSettings />,
    },
  ];

  return (
    <div className="flex justify-center shadow-md h-[100vw] -ml-20">
      <div className=" gap-4 items-center">
        <div className="justify-center grid grid-cols-2 w-[120px] mb-10">
          <img src="/src/images/white-bg-logo.png" className="h-12 mt-5 ml-2" />
          <div className="text-xl top-[10px] mt-7">Base</div>
        </div>
        <div className="text-gray-500 flex flex-col  items-start justify-center gap-4">
          {side_data.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-5 p-2 text-xl"
            >
              <span className="p-3">{item.Icon}</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
