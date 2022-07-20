import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import Rule from './component/Rule';
import Faq from './component/Faq';
import Banner from './component/Banner';
import FooterPA2 from './component/FooterPA2';
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
          <Route path='/*' component={Home}></Route>
          {/* <Redirect from='/' to={'/home'} /> */}
        </Switch>
      </Router>

      <FooterPA2 />

    </div>
  );
}

export default App;
