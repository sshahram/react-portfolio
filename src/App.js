import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header>
        <Switch>
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Resume' component={Resume} />
          <Route path='/' component={About} />
        </Switch>
      </Header>
    </div>
  );
}

export default App;
