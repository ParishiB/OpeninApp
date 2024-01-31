import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import UploadMain from "./UploadMain";
import UploadMobile from "./UploadMobile";

const Upload = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <UploadMobile />
      ) : (
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-4">
            <UploadMain />
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
