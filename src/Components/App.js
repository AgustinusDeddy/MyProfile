import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyNavbar from './Navbar'
import Home from './Home'
import Experiences from './Experiences'
// import Educations from './Educations'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNavbar />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/experiences' component={Experiences} />
            {/* <Route path='/education' component={Educations} /> */}
            <Route render={() => <div className="firstPanel"><h1 className='text-center'>404 Error. Not found.</h1></div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
