import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      status: "active",
      dob: "1990-01-15",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      status: "inactive",
      dob: "1985-05-22",
    },
    {
      id: 3,
      firstName: "Robert",
      lastName: "Johnson",
      status: "active",
      dob: "1978-11-30",
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Williams",
      status: "active",
      dob: "1992-03-10",
    },
    {
      id: 5,
      firstName: "Michael",
      lastName: "Brown",
      status: "inactive",
      dob: "1982-07-18",
    },
    {
      id: 6,
      firstName: "Sarah",
      lastName: "Davis",
      status: "active",
      dob: "1995-09-25",
    },
    {
      id: 7,
      firstName: "David",
      lastName: "Miller",
      status: "inactive",
      dob: "1975-12-05",
    },
    {
      id: 8,
      firstName: "Jessica",
      lastName: "Wilson",
      status: "active",
      dob: "1988-04-12",
    },
    {
      id: 9,
      firstName: "Thomas",
      lastName: "Moore",
      status: "inactive",
      dob: "1991-08-20",
    },
    {
      id: 10,
      firstName: "Lisa",
      lastName: "Taylor",
      status: "active",
      dob: "1980-06-08",
    },
  ],
  currentPage: 1,
  perPage: 5,
  editingUserId: null,
  currentUser: null,
  isAddingNew: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
      state.currentPage = 1;
    },
    startEditing: (state, action) => {
      state.editingUserId = action.payload;
      state.isAddingNew = false;
    },
    addNewUser: (state) => {
      state.isAddingNew = true;
      state.editingUserId = null;
    },
    saveUser: (state, action) => {
      if (state.isAddingNew) {
        // Add new user
        const newId = Math.max(...state.users.map((u) => u.id)) + 1;
        state.users.unshift({ ...action.payload, id: newId });
        state.isAddingNew = false;
      } else {
        // Update existing user
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
        state.editingUserId = null;
      }
    },
    cancelEditing: (state) => {
      state.editingUserId = null;
      state.isAddingNew = false;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  setPerPage,
  startEditing,
  addNewUser,
  saveUser,
  setCurrentUser,
  cancelEditing,
} = userSlice.actions;
export default userSlice.reducer;
