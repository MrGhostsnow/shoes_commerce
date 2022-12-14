import "./App.css";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card/Card";
import CreateShoes from "./components/views/CreateShoes";
import DetailsShoes from "./components/views/DetailsShoes";

function App() {
  return (
    <div className="App">
      <img className="logo" src="./assets/images/logosnowshoes.png" alt="" />
      <Routes>
        <Route path="/shoes_commerce" element={<Card />} />
        <Route path="/details/:id" element={<DetailsShoes />} />
        <Route path="/create" element={<CreateShoes />} />
      </Routes>
    </div>
  );
}

export default App;
