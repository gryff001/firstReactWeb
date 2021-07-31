
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Footer from "../src/footer";
import { Redirect, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Service' component={Service}/>
        <Route exact path='/Contact' component={Contact}/>
        <Redirect to="/"/>
      </switch>
      <Footer/>
      
    </div>
  );
}

export default App;
