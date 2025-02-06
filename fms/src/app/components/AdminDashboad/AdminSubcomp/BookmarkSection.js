'use client'
import { useState } from "react";
import { Trash2, FileText } from "lucide-react";
import './Admin.css';

export default function Bookmarks() {
  const [searchTerm, setSearchTerm] = useState("");
  const files = [
    { name: "Sample File.txt", size: "2MB" },
    { name: "Document.pdf", size: "4MB" },
    { name: "Photo.jpg", size: "1.5MB" },
  ];

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bookmarks-container">
      <h2 className="bookmarks-title">Bookmarks</h2>
      <div className="bookmarks-header">
        <div className="bookmarks-stats">
          <span>{filteredFiles.length} Files, </span>
          <span>{filteredFiles.reduce((total, file) => total + parseFloat(file.size), 0)} MB</span>
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search files..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="file-list">
        {filteredFiles.map((file, index) => (
          <li key={index} className="file-item">
            <span>{file.name}</span>
            <div className="file-actions">
              <button className="button button-file">
                <FileText className="w-4 h-4" />
              </button>
              <button className="button button-delete">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
