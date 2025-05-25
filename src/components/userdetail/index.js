// components/UserDetail.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../slices/userSlice";
import { IoIosArrowRoundBack } from "react-icons/io";
import Button from "../button";

const UserDetail = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  /*** Handles navigation back to the user list ***/
  const handleBack = () => {
    dispatch(setCurrentUser(null));
  };

  return (
    <div className="user-detail">
      {/* Back Navigation Button */}
      <Button
        onClick={handleBack}
        text="Back"
        icon={<IoIosArrowRoundBack size="22px" />}
      />

      <h2>User Details</h2>

      <div className="detail-card">
        {/* First Name Field */}
        <div className="detail-row">
          <span className="detail-label">First Name : </span>
          <span className="detail-value">{currentUser.firstName}</span>
        </div>
        {/* Last Name Field */}
        <div className="detail-row">
          <span className="detail-label">Last Name : </span>
          <span className="detail-value">{currentUser.lastName}</span>
        </div>
        {/* Status Field */}
        <div className="detail-row">
          <span className="detail-label">Status : </span>
          <span className="detail-value">{currentUser.status}</span>
        </div>
        {/* Date of Birth Field */}
        <div className="detail-row">
          <span className="detail-label">Date of Birth : </span>
          <span className="detail-value">
            {new Date(currentUser.dob).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
