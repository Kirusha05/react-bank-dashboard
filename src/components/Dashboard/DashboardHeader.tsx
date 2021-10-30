import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

const DashboardHeader = () => {
  return (
    <div className="w-full border-b border-gray-200 p-8 flex items-center">
      {/* Profile Photo */}
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-6"></div>

      {/* Profile Info */}
      <div className="flex flex-col items-start">
        {/* Profile Name */}
        <div className="font-bold text-3xl mb-2">Marie Claire</div>
        {/* Profile Edit */}
        <div className="flex gap-6">
          <button className="text-gray-500 flex gap-1 items-center">
            <FiEdit />
            Edit profile
          </button>
          <p className="text-green-500 flex gap-1 items-center">
            <MdVerified />
            Verified
          </p>
        </div>
      </div>
      
      {/* Header Notifications btn */}
      <div className="flex-1 flex justify-end">
        <button className="px-4 py-2 bg-transparent border border-gray-200 text-red-600 rounded-md font-bold text-sm flex gap-2 items-center hover:bg-gray-50 transition-colors ease-in">
          <IoMdNotifications className="text-lg" />
          Notifications
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
