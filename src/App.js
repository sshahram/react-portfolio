import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header>
        <Switch>
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Contact' component={Contact} />
          <Route path='/' component={About} />
        </Switch>
      </Header>
    </div>
  );
}

export default App;
