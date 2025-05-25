import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  setCurrentPage,
  setPerPage,
  startEditing,
  saveUser,
  setCurrentUser,
  addNewUser,
  cancelEditing,
} from "../../slices/userSlice";
import Pagination from "../pagination";
import "./usertable.scss";
import TableRow from "../tablerow";
import Button from "../button";
import { FaPlus } from "react-icons/fa";

const UserTable = () => {
  const dispatch = useDispatch();
  const { users, currentPage, perPage, editingUserId, isAddingNew } =
    useSelector((state) => state.users);

  // Calculate pagination
  const totalPages = Math.ceil(users.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const paginatedUsers = users.slice(startIndex, startIndex + perPage);

  const handleAddNew = () => {
    dispatch(addNewUser());
  };

  const handleCancel = () => {
    dispatch(cancelEditing());
  };

  const handleEdit = (userId) => {
    dispatch(startEditing(userId));
  };

  const handleSave = (user) => {
    if (isAddingNew) {
      dispatch(
        saveUser({ ...user, id: Math.max(...users.map((u) => u.id)) + 1 })
      );
      toast.success("New user added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(saveUser(user));
      toast.success("User details updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleViewDetails = (user) => {
    dispatch(setCurrentUser(user));
  };

  return (
    <div className="userTable">
      <div className="table-actions">
        {/* Items per page selector */}
        <div className="per-page-selector-wrapper">
          <div class="per-page-selector">
            <label>Items per page : </label>
            <select
              value={perPage}
              onChange={(e) => dispatch(setPerPage(Number(e.target.value)))}
            >
              <option value={2}>2</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>
          {/* Add New User button */}
          <div>
            {!isAddingNew && (
              <Button
                onClick={handleAddNew}
                text="Add New User"
                customClass="add-new-btn"
                icon={<FaPlus />}
              />
            )}
          </div>
        </div>
      </div>

      {/* Main user data table */}
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Add new user row (when in adding mode) */}
          {isAddingNew && (
            <TableRow
              user={{
                id: "new",
                firstName: "",
                lastName: "",
                status: "inactive",
                dob: new Date().toISOString().split("T")[0],
              }}
              isEditing={true}
              onSave={handleSave}
              onCancel={handleCancel}
              isNewUser={true}
            />
          )}

          {/* Render TableRow for each user in current page */}
          {paginatedUsers.map((user) => (
            <TableRow
              key={user.id}
              user={user}
              isEditing={editingUserId === user.id}
              onEdit={handleEdit}
              onSave={handleSave}
              onViewDetails={handleViewDetails}
              onCancel={handleCancel}
            />
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => dispatch(setCurrentPage(page))}
      />
    </div>
  );
};

export default UserTable;
