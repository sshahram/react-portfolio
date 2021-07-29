import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer'

require('dotenv').config();

function App() {
  return (
    <>
      <Header className="page">
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/About'} component={About} />
          <Route exact path={process.env.PUBLIC_URL + '/Portfolio'} component={Portfolio} />
          <Route exact path={process.env.PUBLIC_URL + '/Contact'} component={Contact} />
          <Route exact path={process.env.PUBLIC_URL + '/'} component={About} />
        </Switch>
      </Header>
      <Footer></Footer>
    </>
  );
}

export default App;
