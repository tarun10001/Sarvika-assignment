import "./styles/main.scss";
import React from "react";
import UserTable from "./components/usertable";
import UserDetail from "./components/userdetail";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  
  // Get current user from Redux store
  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <div className="app">
      <header className="app-header">
        <h1>User Management System</h1>
      </header>
      <main className="app-main">
        {currentUser ? <UserDetail /> : <UserTable />}
      </main>

      {/* Global Notification System */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
