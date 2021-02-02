import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom";
import EmployeesService from "../../service/Employees.service";

class Employees extends Component {
  render() {
    return (
      <div>
        <center><h1>To List</h1></center>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Employees.map((Employee) => (
                <tr key={Employee.id}>
                  <td>{Employee.id}</td>
                  <td>{Employee.employee_name}</td>
                  <td>{String(Employee.employee_salary)}</td>
                  <td><Link to="/Employee/1">Edit</Link></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    )
  }

  editEmployee() {
    alert("inside")
  }

  state = {
    Employees: []
  };
  componentDidMount() {
    EmployeesService.GetAllData()
      .then(response => {
        console.log(response);
        this.setState({
          Employees: response.data.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

}
export default Employees;
