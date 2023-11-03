import { Routes, Route } from "react-router-dom";
import { AlbumsList } from "./components/AlbumsList";
import { AlbumDetails } from "./components/AlbumDetails";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<AlbumsList/>} />
      <Route path="/album/:albumId" element={<AlbumDetails/>} />
    </Routes>
    </div>
  );
}

export default App;
