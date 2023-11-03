import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/AlbumDetails.css";

export const AlbumDetails = () => {
  const { albumId } = useParams();
  const albums = useSelector((state) => state.albums);

  const currentAlbum = albums.filter(
    (album) => album.albumId === parseInt(albumId)
  );

  return (
    <div className="details-grid">
      {currentAlbum.map((photo) => (
        <div key={photo.id} className="photo-container">
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};
