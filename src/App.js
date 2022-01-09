import "./App.scss";
import NavHome from "./components/Nav/NavHome";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import WordPage from "./pages/WordPage";
import NoMatch from "./pages/NoMatch";
import AddWordPage from "./pages/AddWordPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <NavHome />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/word/:word" component={WordPage} />
            <Route exact path="/admin/addword" component={AddWordPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
