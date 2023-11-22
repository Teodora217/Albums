import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Albums.css";

const Albums = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="albums-container">Welcome</div>
      <div className="button-container">
        <button onClick={() => navigate(`/albums`)} className="button">
          View Albums
        </button>
      </div>
    </div>
  );
};

export default Albums;
