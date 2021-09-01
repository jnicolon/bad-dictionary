import "./App.scss";
import NavHome from "./components/Nav/NavHome";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import WordPage from "./pages/WordPage";
import NoMatch from "./pages/NoMatch";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <NavHome />
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/word/:word" component={WordPage} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
