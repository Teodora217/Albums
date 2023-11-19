import React, { useEffect } from "react";
import { getAlbums } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAlbums } from "../slices/albumsSlice";
import "../styles/AlbumsList.css";

export const AlbumsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const albums = useSelector((state) => state.albums);
  const favorites = useSelector((state) => state.favorites);
  // console.log("", favorites);
  useEffect(() => {
    const loadData = async () => {
      const data = await getAlbums();
      dispatch(setAlbums(data));
    };

    loadData();
  }, [dispatch]);

  const uniqueAlbumIds = [...new Set(albums.map((album) => album.albumId))];

  return (
    <div className="albums-grid">
      {favorites.length > 0 && (
        <div>
          <h3>Favorites</h3>
          <button onClick={() => navigate("favorites")}>View Favorites</button>
        </div>
      )}
      {uniqueAlbumIds.map((id) => (
        <div key={id} className="album-container">
          <h3>Album {id}</h3>
          <button onClick={() => navigate(`/album/${id}`)}>View Details</button>
        </div>
      ))}
    </div>
  );
};
