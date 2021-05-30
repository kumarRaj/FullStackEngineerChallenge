import './App.css';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EmployeeTile from './employee/EmployeeTile';
import EmployeeDetails from './employee/EmployeeDetails';
import CreateEmployee from './employee/CreateEmployee';
import Employees from './employee/Employees';
import Actions from './employee/Actions';

class App extends Component {
  render() {
      return (
      <div>
        <Switch>
          <Route exact path='/' component={EmployeeTile}/>
          <Route path='/employees' component={Employees}/>
          <Route path='/employee/new' component={CreateEmployee}/>
          <Route path='/employee/actions' component={Actions}/>
          <Route path='/employee/:id' component={CreateEmployee}/>
          <Redirect from='/**' to='/'/>
        </Switch>
      </div>
      );  
    }
  
}

export default App;
