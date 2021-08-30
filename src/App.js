import "./App.scss";
import NavHome from "./components/Nav/NavHome";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavHome />
      <div className="main-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
