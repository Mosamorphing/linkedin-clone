import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Loginn from "./components/Loginn";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Loginn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
