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
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/reviews/:categories">
            <Reviews />
          </Route>
          <Route exact path="/reviews/review/:review_id">
            <Review/>
          </Route>
          <Route exact path="/account"></Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
