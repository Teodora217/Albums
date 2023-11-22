import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorites } from "../slices/favoritesSlice";
import { FaHeart } from "react-icons/fa";
import "../styles/AlbumDetails.css";

export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFavorites(id));
  };

  return (
    <div className="details-grid">
      {favorites.map((photo) => (
        <div key={photo.id} className="photo-container">
          <div>
            <FaHeart
              className="heart-icon"
              onClick={() => handleRemoveFromFavorites(photo.id)}
            />
          </div>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};
