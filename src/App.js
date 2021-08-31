import "./App.scss";
import NavHome from "./components/Nav/NavHome";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavHome />
      <div className="main-container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
