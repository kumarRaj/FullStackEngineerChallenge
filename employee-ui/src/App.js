import './App.css';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Employee from './employee/EmployeeDetailsPage';
import Employees from './employee/Employees';
import Actions from './employee/Actions';

class App extends Component {
  render() {
      return (
      <div>
        <Switch>
          <Route exact path='/' component={Employees}/>
          <Route path='/employees' component={Employees}/>
          <Route path='/employee/new' component={Employee}/>
          <Route path='/employee/actions' component={Actions}/>
          <Route path='/employee/:id' component={Employee}/>
          <Redirect from='/**' to='/'/>
        </Switch>
      </div>
      );  
    }
  
}

export default App;
