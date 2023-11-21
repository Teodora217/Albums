import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setFavorites, removeFavorites } from "../slices/favoritesSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../styles/AlbumDetails.css";

export const AlbumDetails = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const albums = useSelector((state) => state.albums);
  const favorites = useSelector((state) => state.favorites);

  console.log("favorites", favorites);

  const currentAlbum = albums.filter(
    (album) => album.albumId === parseInt(albumId)
  );

  const handleAddToFavorites = (photo) => {
    dispatch(setFavorites(photo));
  };

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFavorites(id));
  };

  return (
    <div className="details-grid">
      {currentAlbum.map((photo) => (
        <div
          style={{ position: "relative" }}
          key={photo.id}
          className="photo-container"
        >
          {favorites.some((favorite) => favorite.id === photo.id) ? (
            <div style={{ position: "absolute", right: 10 }}>
              <FaHeart
                onClick={() => handleRemoveFromFavorites(photo.id)}
                style={{ cursor: "pointer", color: "white" }}
              />
            </div>
          ) : (
            <div style={{ position: "absolute", right: 10 }}>
              <FaRegHeart
                onClick={() => handleAddToFavorites(photo)}
                // style={{ cursor: "pointer", color: "white" }}
              />
            </div>
          )}

          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};
