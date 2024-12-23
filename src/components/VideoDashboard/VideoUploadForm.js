import React, { useState } from "react";
import axios from "axios";

const VideoUploadForm = ({ fetchVideos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", file);

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/videos", formData, {
        headers: { "x-auth-token": token },
      });
      fetchVideos(); // Refresh video list after upload
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <h2>Upload Video</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default VideoUploadForm;
