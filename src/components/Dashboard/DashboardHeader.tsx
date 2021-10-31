import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import ProfilePhoto from '../../assets/profile-photo.jpg';

const DashboardHeader: React.FC = () => {
  return (
    <div className="w-full border-b border-gray-200 py-8">
      <div className="container flex items-center">
        {/* Profile Photo */}
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-3 md:mr-6">
          <img src={ProfilePhoto} alt="Profile Avatar" />
        </div>
        {/* Profile Info */}
        <div className="flex flex-col items-start">
          <div className="font-thin text-xl md:text-3xl mb-2">Marie Claire</div> {/* Profile Name */}
          {/* Profile Edit */}
          <div className="flex gap-2 md:gap-6"> 
            <button className="text-xs md:text-sm text-gray-500 flex gap-1 items-center hover:text-gray-900 hover:underline">
              <FiEdit />
              Edit profile
            </button>
            <p className="text-xs md:text-sm text-green-400 flex gap-1 items-center font-bold" title="Verified Profile">
              <MdVerified />
              Verified
            </p>
          </div>
        </div>

        {/* Header Notifications btn */}
        <div className="flex-1 flex justify-end">
          <button className="btn btn-danger flex gap-2 items-center">
            <IoMdNotifications className="text-lg" />
            <span className="hidden md:block">Notifications</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
