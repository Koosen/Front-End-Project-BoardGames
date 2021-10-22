import "./App.css";
import MainMenu from "./components/MainMenu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Reviews from "./components/Reviews";
import Review from "./components/Review";

function App() {
  return (
    <BrowserRouter>
      <div className="AppBody">
          <MainMenu />
        <Switch>
          <Route exact path="/Reviews">
            <Reviews />
          </Route>
          <Route exact path="/Reviews/:categories">
            <Reviews />
          </Route>
          <Route exact path="/Review/:review_id">
            <Review/>
          </Route>
          <Route exact path="/Account"></Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
