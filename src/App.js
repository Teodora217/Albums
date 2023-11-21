import { Routes, Route } from "react-router-dom";
import { AlbumsList } from "./components/AlbumsList";
import { AlbumDetails } from "./components/AlbumDetails";
import { Favorites } from "./components/Favorites";
import Albums from "./components/Albums";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Albums />} />
        <Route exact path="/albums" element={<AlbumsList />} />
        <Route path="/album/:albumId" element={<AlbumDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
