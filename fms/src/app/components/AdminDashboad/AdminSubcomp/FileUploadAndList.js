'use client'
// components/FileUploadAndList.js
import { Bookmark, UserPlus, Lock, Trash2 } from "lucide-react";
import "./Admin.css";

export default function FileUploadAndList() {
  return (
    <div className="file-upload-container">
      {/* Upload Section */}
      <div className="card">
        <h2 className="card-title">Upload File</h2>
        <form className="form-upload">
          <input type="file" id="fileUpload" className="input-file" />
          <button type="submit" className="btn-upload">Upload</button>
        </form>
      </div>

      {/* File List */}
      <div className="card">
        <h2 className="card-title">File List</h2>
        <ul className="file-list">
          {/* Static Example File */}
          <li className="file-item">
            <span>Sample File.txt</span>
            <div className="action-buttons">
              <button className="icon-button">
                <Bookmark className="icon" />
              </button>
              <button className="icon-button">
                <UserPlus className="icon" />
              </button>
              <button className="icon-button">
                <Lock className="icon" />
              </button>
              <button className="icon-button delete">
                <Trash2 className="icon" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}