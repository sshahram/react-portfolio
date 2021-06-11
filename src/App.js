import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div>
      <Header>
        <Switch>
          <Route path='/' component={About} />
        </Switch>
      </Header>
    </div>
  );
}

export default App;
