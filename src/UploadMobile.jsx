import React, { useEffect, useRef, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
const a = ["animate-slideIn", "animate-slideOut"];
import { MdDashboard } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import DragComponent from "./DragDrop/DragComponent";
import "./sidebar.css";

const UploadMobile = () => {
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const selectRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedTags, setSelectedTags] = useState(Array(5).fill(""));
  const [availableTags, setAvailableTags] = useState([
    "tag1",
    "tag2",
    "tag3",
    "tag4",
    "tag5",
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTagChange = (index, event) => {
    const newSelectedTags = [...selectedTags];
    const selectedTag = event.target.value;

    if (!newSelectedTags[index].includes(selectedTag)) {
      newSelectedTags[index] +=
        (newSelectedTags[index] ? ", " : "") + selectedTag;
      setAvailableTags(availableTags.filter((tag) => tag !== selectedTag));
    } else {
      newSelectedTags[index] = newSelectedTags[index]
        .split(", ")
        .filter((tag) => tag !== selectedTag)
        .join(", ");
      setAvailableTags([...availableTags, selectedTag]);
    }

    if (selectRef.current) {
      selectRef.current.value = `Select Tag`;
    }

    setSelectedTags(newSelectedTags);
    event.target.value = "Select Tag";
  };

  const removeTag = (index, tagToRemove) => {
    const newSelectedTags = [...selectedTags];
    newSelectedTags[index] = newSelectedTags[index]
      .split(", ")
      .filter((tag) => tag !== tagToRemove)
      .join(", ");
    setSelectedTags(newSelectedTags);
    setAvailableTags([...availableTags, tagToRemove]);
  };

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [addOneTimeClass, setAddOneTimeClass] = useState(true);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
      return;
    } else if (open) {
      ref.current.classList.remove("animate-slideOut");
      ref.current.classList.add("animate-slideIn");
    } else {
      ref.current.classList.remove("animate-slideIn");
      ref.current.classList.add("animate-slideOut");
    }
  }, [open]);

  const handleClose = () => {};
  return (
    <div>
      <div className="text-2xl ">
        <ol
          ref={ref}
          className={`fixed bg-white w-[100%] h-[100%] flex items-center justify-center z-10 ${
            open ? "-translate-x-[100%]" : "translate-x-0"
          } ${addOneTimeClass ? "!translate-x-[-100%]" : ""} `}
          style={{
            boxShadow: open ? "0px 0px 10px rgba(0, 0, 0, 0.25)" : "none",
            left: "0",
            right: open ? "unset" : "0",
          }}
        >
          <div
            className="flex justify-center"
            style={{ transform: open ? "translateX(-40%)" : "translateX(0)" }}
          >
            <div className="gap-4 ">
              <div className="grid grid-cols-2 justify-end mb-5">
                <div className="flex items-start ">
                  <img
                    src="/src/images/white-bg-logo.png"
                    className="h-[27px] ml-2 -mt-10 "
                  />
                  <div className="text-md  ml-2 -mt-10 mb-2 ">Base</div>
                </div>

                <div
                  className="text-gray-500 fixed top-0 right-0 -mr-20 -mt-10 "
                  onClick={() => {
                    setOpen(!open);
                    if (addOneTimeClass) {
                      setAddOneTimeClass(false);
                    }
                  }}
                >
                  x
                </div>
              </div>
              <div className="text-gray-500 flex flex-col  items-start justify-center gap-4">
                {side_data.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-5 p-1 text-md"
                  >
                    <span className="p-3">{item.Icon}</span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ol>
      </div>
      <div
        className="flex pl-5 pt-5"
        onClick={() => {
          setOpen(!open);
          if (addOneTimeClass) {
            setAddOneTimeClass(false);
          }
        }}
      >
        <div className="w-15">
          <IoMenuSharp className="left w-full h-6" />
        </div>

        <div className="flex  w-full justify-between">
          <div className="flex items-start">
            <img
              src="/src/images/white-bg-logo.png"
              className="h-[26px] ml-6"
            />
            <div className="text-md ">Base</div>
          </div>
          <div className="">
            <div className="grid grid-cols-2 text-xl">
              <IoIosNotifications className="mt-3" />
              <img
                src="/src/images/profile-pic.png"
                alt=""
                className="h-[30px] mr-2 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md h-[352px] w-[328px]p-5 m-5 pb-8 rounded-lg">
        <div className="p-6">
          <DragComponent />
        </div>
        <div>
          {isLoading ? (
            <button className="text-white w-[296px] h-[46px] bg-indigo-600 m-auto p-3 flex items-center justify-center rounded-lg lg:w-[546px]">
              <div>
                <FaFileUpload />
              </div>
              <span className="ml-2">Upload</span>
            </button>
          ) : (
            <button className="text-white w-[296px] h-[46px] bg-indigo-600 m-auto p-3 flex items-center justify-center rounded-lg lg:w-[546px]">
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          )}
        </div>
      </div>
      <div className="upload_tables overflow-auto">
        <div className="grid grid-cols-5 gap-y-4 bg-gray-200 m-5 rounded-lg w-[1096px]">
          {/* Column headers */}
          <div className=" p-4 flex items-center justify-center">Sl.No</div>
          <div className=" p-4 flex items-center justify-center">Links</div>
          <div className=" p-4 flex items-center justify-center">Prefix</div>
          <div className=" p-4 flex items-center justify-center">Add Tags</div>
          <div className=" p-4 flex items-center justify-center">
            Selected Tags
          </div>

          {/* Table content */}
          {[...Array(5)].map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`p-4 ml-4  flex items-center justify-center bg-white  ${
                  index === 4 ? "mb-4" : ""
                }`}
              >
                0{index + 1}
              </div>{" "}
              <div
                className={`p-4 flex items-center justify-center bg-white  text-blue-400 underline ${
                  index === 4 ? "mb-4" : ""
                }`}
              >
                {" "}
                www.google.com
              </div>
              <div
                className={`p-4 flex items-center justify-center bg-white ${
                  index === 4 ? "mb-4" : ""
                }`}
              >
                Prefix {index + 1}
              </div>
              <div
                className={`p-4 flex items-center justify-center bg-white ${
                  index === 4 ? "mb-4" : ""
                }`}
              >
                {/* Dropdown menu */}
                <select
                  className="w-[130px] p-2  bg-white"
                  value={selectedValue}
                  onChange={(event) => handleTagChange(index, event)}
                  ref={selectRef}
                >
                  <option
                    value=""
                    className="bg-white"
                    disabled
                    selected
                    hidden
                  >
                    Select Tags
                  </option>
                  <option value="tag1">Tag1</option>
                  <option value="tag2">Tag2</option>
                  <option value="tag3">Tag3</option>
                  <option value="tag4">Tag4</option>
                  <option value="tag5">Tag5</option>
                </select>
              </div>
              <div
                className={`p-4 mr-3 flex items-center justify-center bg-white overflow-auto ${
                  index === 4 ? "mb-4" : ""
                }`}
              >
                {selectedTags[index] &&
                  selectedTags[index].split(", ").map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex bg-indigo-600 text-white p-2 m-2 rounded-lg"
                    >
                      {tag}
                      <IoClose
                        className="close-icon p-0 m-1"
                        onClick={() => removeTag(index, tag)}
                      />
                    </div>
                  ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadMobile;
