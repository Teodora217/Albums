import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAlbums } from "../api";
import { setAlbums } from "../slices/albumsSlice";
import "../styles/AlbumsList.css";
import { dummyImageData } from "../utils/dummyData";

export const AlbumsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const albums = useSelector((state) => state.albums);
  const uniqueAlbumIds = useMemo(() => {
    return [...new Set(albums.map((album) => album.albumId))];
  }, [albums]);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * dummyImageData.length);
    return dummyImageData[randomIndex];
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await getAlbums();
      dispatch(setAlbums(data));
    };

    loadData();
  }, [dispatch]);

  return (
    <div>
      <div className="albums-grid">
        {uniqueAlbumIds.map((id) => (
          <div
            key={id}
            style={{
              backgroundImage: `url(${getRandomImage()})`,
            }}
            className="album-container"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <h3>Album {id}</h3>
              <button
                className="button-details"
                onClick={() => navigate(`/album/${id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
