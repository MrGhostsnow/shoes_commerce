import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Card from "./components/Card/Card";
import CreateShoes from "./components/views/CreateShoes";

function App() {
  return (
    <div className="App">
      <img className="logo" src="./assets/images/logosnowshoes.png" alt="" />
      <Routes>
          <Route
          path="/"
          element={<Card/>}/>
          <Route
          path="/create"
          element={<CreateShoes/>}/>
      </Routes>
    </div>
  );
}

export default App;
