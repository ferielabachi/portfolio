import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//component
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

//css
import './assets/css/Home.min.css';
import './assets/css/About.min.css';
import './assets/css/Contact.min.css';

class App extends Component
{
  render(){
    return(
   		<Router>
    		<div className="App">
      			<Header />
              <Route exact path="/portfolio/" component={ Home } />
	      			<Route exact path="/" component={ Home } />
	      			<Route exact path="/contact" component={ Contact } />
					    <Route exact path="/about" component={ About } />
            <Footer />
      		</div>
        </Router>
    );
  }
}

export default App;
