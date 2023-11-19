import { Routes, Route } from "react-router-dom";
import { AlbumsList } from "./components/AlbumsList";
import { AlbumDetails } from "./components/AlbumDetails";
import { Favorites } from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AlbumsList />} />
        <Route path="/album/:albumId" element={<AlbumDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
