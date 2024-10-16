import React from 'react';
import UserProfile from '../assets/images/UserProfile.png'
const Profile = () => {
  return (
    <div className="flex items-center">
      <img
        src={UserProfile}
        alt="Profile"
        className="rounded-full w-12 h-12"
      />
      <span className="ml-3">User</span>
    </div>
  );
};

export default Profile;
