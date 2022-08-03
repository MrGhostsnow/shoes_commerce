import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <img className="logo" src="./assets/images/logosnowshoes.png" alt="" />
      <Routes>
        <div className="Home">
          <Route
          path="/"
          element={<Card/>}/>
        </div>
      </Routes>
    </div>
  );
}

export default App;
