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
        <div key={photo.id} className="photo-container">
          {favorites.some((favorite) => favorite.id === photo.id) ? (
            <div className="heart-icon">
              <FaHeart onClick={() => handleRemoveFromFavorites(photo.id)} />
            </div>
          ) : (
            <div className="heart-icon">
              <FaRegHeart onClick={() => handleAddToFavorites(photo)} />
            </div>
          )}

          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};
