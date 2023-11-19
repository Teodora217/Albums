import React from "react";
import { useSelector } from "react-redux";
import "../styles/AlbumDetails.css";

export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="details-grid">
      {favorites.map((photo) => (
        <div key={photo.id} className="photo-container">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};
