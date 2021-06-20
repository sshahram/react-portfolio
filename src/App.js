import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header className="page">
        <Switch>
          <Route exact path='/About' component={About} />
          <Route exact path='/' component={About} />
          <Route exact path='/Portfolio' component={Portfolio} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Resume' component={Resume} />
        </Switch>
      </Header>
      <Footer></Footer>
    </>
  );
}

export default App;
