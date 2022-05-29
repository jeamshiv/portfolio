import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Website from "./Project/Website";
import AppView from "./Project/AppView";
import ErrorPage from "./ErrorPage/ErrorPage";
import Portfolio from "./Project/Portfolio";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route
            path="/website/:id"
            render={(props) => (
              <>
                <Website {...props} />
              </>
            )}
          ></Route>

          <Route
            path="/app/:id"
            render={(props) => (
              <>
                <AppView {...props} />
              </>
            )}
          ></Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route component={ErrorPage} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
