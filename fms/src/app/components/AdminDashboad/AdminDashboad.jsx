// pages/AdminDashboard.js
'use client';
import { useState } from "react";
import Bookmarks from "./AdminSubcomp/BookmarkSection";
import FileUploadAndList from "./AdminSubcomp/FileUploadAndList";
import { LogOut } from "lucide-react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [users, setUsers] = useState([
    { username: "admin", password: "admin123", isAdmin: true, files: [], bookmarks: [] },
    { username: "user1", password: "password1", isAdmin: false, files: [], bookmarks: [] }
  ]);

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="dashboard-container">
      <div className="header-section">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="logout-button"
        >
          <LogOut className="logout-icon" />
          Logout
        </button>
      </div>

      <div className="content-section">
        <div className="file-upload-list">
          <FileUploadAndList />
        </div>
      </div>
    </div>
  );
}
