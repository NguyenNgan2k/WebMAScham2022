import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import './css/style.css';
import Home from './component/Home';
import Rule from './component/Rule';
import Faq from './component/Faq';
import History from './component/History';
import Banner from './component/Banner';
import Footer from './component/Footer';
import BXH from './component/BXH';
 
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Banner />
        <Switch>
          <Route path='/rule' component={Rule}></Route>
          <Route path='/faq' component={Faq}></Route>
          <Route path='/faq/:id?' component={Faq}></Route>
          <Route path='/history' component={History} ></Route>
          <Route path='/home/:id?' component={Home}></Route>
          <Route path='/history/:id?' component={History}></Route>
          <Redirect from='/' to={'/home'} />
        </Switch>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
