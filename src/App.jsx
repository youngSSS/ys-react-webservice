import { Route } from 'react-router-dom'

import Main from './routes/Main'
import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import Board from './routes/Board'

import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Main} />
      <Route path="/Home" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/board" component={Board} />
    </div>
  );
}

export default App;
