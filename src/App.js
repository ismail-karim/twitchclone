import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Games from "./components/Games/Games";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopStreams from "./components/TopStreams/TopStreams";
import Live from "./components/Live/Live";
import GameStreams from "./components/GameStreams/GameStreams";

function App() {
  return (

      <Router>
          <div className="App">
              <Header />
              <Sidebar />
              <Switch>
                  <Route exact path="/" component={Games} />
                  <Route exact path="/top-streams" component={TopStreams} />
                  <Route exact path="/live/:slug" component={Live} />
                  <Route exact path="/game/:slug" component={GameStreams} />
              </Switch>
          </div>
      </Router>

  );
}

export default App;
