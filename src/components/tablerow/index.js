// // import React, { useState } from "react";
// // import { CiEdit } from "react-icons/ci";
// // import { FaEye } from "react-icons/fa";
// // import Button from "../button";
// // import Input from "../input";

// // const TableRow = ({ user, isEditing, onEdit, onSave, onViewDetails }) => {
// //   const [editedUser, setEditedUser] = useState(user);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;

// //     setEditedUser((prev) => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? (checked ? "active" : "inactive") : value,
// //     }));
// //   };

// //   return (
// //     <tr>
// //       {/* First Name Column */}
// //       <td>
// //         {isEditing ? (
// //           <Input
// //             type="text"
// //             name="firstName"
// //             value={editedUser.firstName}
// //             onChange={handleChange}
// //           />
// //         ) : (
// //           <span
// //             onClick={() => onViewDetails(user)}
// //             style={{ cursor: "pointer" }}
// //           >
// //             {user.firstName}
// //           </span>
// //         )}
// //       </td>

// //       {/* Last Name Column */}
// //       <td>
// //         {isEditing ? (
// //           <Input
// //             type="text"
// //             name="lastName"
// //             value={editedUser.lastName}
// //             onChange={handleChange}
// //           />
// //         ) : (
// //           user.lastName
// //         )}
// //       </td>

// //       {/* Status Column */}
// //       <td>
// //         {isEditing ? (
// //           <Input
// //             type="checkbox"
// //             name="status"
// //             value={editedUser.status}
// //             onChange={handleChange}
// //             label={editedUser.status === "active" ? "Active" : "Inactive"}
// //           />
// //         ) : user.status === "active" ? (
// //           "Active"
// //         ) : (
// //           "Inactive"
// //         )}
// //       </td>

// //       {/* Date of Birth Column */}
// //       <td>
// //         {isEditing ? (
// //           <Input
// //             type="date"
// //             name="dob"
// //             value={editedUser.dob}
// //             onChange={handleChange}
// //           />
// //         ) : (
// //           new Date(user.dob).toLocaleDateString()
// //         )}
// //       </td>

// //       {/* Actions Column */}
// //       <td>
// //         {isEditing ? (
// //           <Button
// //             customClass="save-btn"
// //             onClick={() => onSave(editedUser)}
// //             text="Save"
// //           />
// //         ) : (
// //           <div className="btn-wrapper">
// //             <Button
// //               customClass="edit-btn"
// //               onClick={() => onEdit(user.id)}
// //               text="Edit"
// //               icon={<CiEdit />}
// //             />
// //             <Button
// //               onClick={() => onViewDetails(user)}
// //               text="View Details"
// //               icon={<FaEye />}
// //             />
// //           </div>
// //         )}
// //       </td>
// //     </tr>
// //   );
// // };

// // export default TableRow;

// // components/TableRow.js
// import React, { useState } from "react";
// import { CiEdit } from "react-icons/ci";
// import { FaEye } from "react-icons/fa";
// import Button from "../button";
// import Input from "../input";

// const TableRow = ({
//   user,
//   isEditing,
//   onEdit,
//   onSave,
//   onViewDetails,
//   onCancel,
//   isNewUser = false,
// }) => {
//   const [editedUser, setEditedUser] = useState(user);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setEditedUser((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? (checked ? "active" : "inactive") : value,
//     }));
//   };

//   return (
//     <tr>
//       {/* First Name Column */}
//       <td>
//         {isEditing ? (
//           <Input
//             type="text"
//             name="firstName"
//             value={editedUser.firstName}
//             onChange={handleChange}
//             required
//           />
//         ) : (
//           <span
//             onClick={() => onViewDetails(user)}
//             style={{ cursor: "pointer" }}
//           >
//             {user.firstName}
//           </span>
//         )}
//       </td>

//       {/* Last Name Column */}
//       <td>
//         {isEditing ? (
//           <Input
//             type="text"
//             name="lastName"
//             value={editedUser.lastName}
//             onChange={handleChange}
//             required
//           />
//         ) : (
//           user.lastName
//         )}
//       </td>

//       {/* Status Column */}
//       <td>
//         {isEditing ? (
//           <Input
//             type="checkbox"
//             name="status"
//             checked={editedUser.status === "active"}
//             onChange={handleChange}
//             label={editedUser.status === "active" ? "Active" : "Inactive"}
//           />
//         ) : user.status === "active" ? (
//           "Active"
//         ) : (
//           "Inactive"
//         )}
//       </td>

//       {/* Date of Birth Column */}
//       <td>
//         {isEditing ? (
//           <Input
//             type="date"
//             name="dob"
//             value={editedUser.dob}
//             onChange={handleChange}
//             required
//           />
//         ) : (
//           new Date(user.dob).toLocaleDateString()
//         )}
//       </td>

//       {/* Actions Column */}
//       <td>
//         {isEditing ? (
//           <div className="btn-wrapper">
//             <Button
//               customClass="save-btn"
//               onClick={() => onSave(editedUser)}
//               text="Save"
//             />
//             <Button customClass="cancel-btn" onClick={onCancel} text="Cancel" />
//           </div>
//         ) : (
//           <div className="btn-wrapper">
//             <Button
//               customClass="edit-btn"
//               onClick={() => onEdit(user.id)}
//               text="Edit"
//               icon={<CiEdit />}
//             />
//             <Button
//               onClick={() => onViewDetails(user)}
//               text="View Details"
//               icon={<FaEye />}
//             />
//           </div>
//         )}
//       </td>
//     </tr>
//   );
// };

// export default TableRow;






// components/TableRow.js
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import Button from "../button";
import Input from "../input";

const TableRow = ({ 
  user, 
  isEditing, 
  onEdit, 
  onSave, 
  onViewDetails, 
  onCancel,
  isNewUser = false 
}) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEditedUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? "active" : "inactive") : value,
    }));
  };

  return (
    <tr>
      {/* First Name Column */}
      <td>
        {isEditing ? (
          <Input
            type="text"
            name="firstName"
            value={editedUser.firstName}
            onChange={handleChange}
            required
          />
        ) : (
          <span
            onClick={() => onViewDetails(user)}
            style={{ cursor: "pointer" }}
          >
            {user.firstName}
          </span>
        )}
      </td>

      {/* Last Name Column */}
      <td>
        {isEditing ? (
          <Input
            type="text"
            name="lastName"
            value={editedUser.lastName}
            onChange={handleChange}
            required
          />
        ) : (
          user.lastName
        )}
      </td>

      {/* Status Column */}
      <td>
        {isEditing ? (
          <label>
            <input
              type="checkbox"
              name="status"
              checked={editedUser.status === "active"}
              onChange={handleChange}
            />
            {editedUser.status === "active" ? "Active" : "Inactive"}
          </label>
        ) : user.status === "active" ? (
          "Active"
        ) : (
          "Inactive"
        )}
      </td>

      {/* Date of Birth Column */}
      <td>
        {isEditing ? (
          <Input
            type="date"
            name="dob"
            value={editedUser.dob}
            onChange={handleChange}
            required
          />
        ) : (
          new Date(user.dob).toLocaleDateString()
        )}
      </td>

      {/* Actions Column */}
      <td>
        {isEditing ? (
          <div className="btn-wrapper">
            <Button
              customClass="save-btn"
              onClick={() => onSave(editedUser)}
              text="Save"
            />
            <Button
              customClass="cancel-btn"
              onClick={onCancel}
              text="Cancel"
            />
          </div>
        ) : (
          <div className="btn-wrapper">
            <Button
              customClass="edit-btn"
              onClick={() => onEdit(user.id)}
              text="Edit"
              icon={<CiEdit />}
            />
            <Button
              onClick={() => onViewDetails(user)}
              text="View Details"
              icon={<FaEye />}
            />
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableRow;