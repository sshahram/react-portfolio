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
          <Route exact path='/react-portfolio/About' component={About} />
          <Route exact path='/react-portfolio/Portfolio' component={Portfolio} />
          <Route exact path='/react-portfolio/Contact' component={Contact} />
          <Route exact path='/react-portfolio/Resume' component={Resume} />
          <Route exact path='/react-portfolio' component={About} />
        </Switch>
      </Header>
      <Footer></Footer>
    </>
  );
}

export default App;
