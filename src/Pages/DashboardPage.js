import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoUploadForm from "../components/VideoDashboard/VideoUploadForm";
import VideoList from "../components/VideoDashboard/VideoList";
import Navbar from "./../components/Navbar/Navbar";

const DashboardPage = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/videos", {
        headers: { "x-auth-token": token },
      });
      setVideos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1>Dashboard</h1>
        <VideoUploadForm fetchVideos={fetchVideos} />
        <VideoList videos={videos} />
      </div>
    </>
  );
};

export default DashboardPage;
