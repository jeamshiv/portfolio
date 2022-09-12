import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Website from './Pages/Website/Website';
import AppView from './Pages/AppView/AppView';
import Portfolio from './Pages/Portfolio/Portfolio';

//404 Page
import ErrorPage from './Pages/ErrorPage/ErrorPage';

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
            )}></Route>

          <Route
            path="/app/:id"
            render={(props) => (
              <>
                <AppView {...props} />
              </>
            )}></Route>

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
