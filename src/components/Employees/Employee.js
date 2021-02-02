import React, { Component } from 'react'
import EmployeesService from "../../service/Employees.service";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangecompleted = this.onChangecompleted.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.newEmployee = this.newEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);

    this.state = {
      id: null,
      employee_name: "",
      employee_salary: ""
    };
  }

  componentDidMount() {
    const selectedId = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    console.log("selected Id;" + selectedId);

    if (selectedId != -1) {
      this.getEmployee(selectedId)
    }
  }

  getEmployee(id) {
    EmployeesService.get(id)
      .then(response => {
        console.log(response);
        this.setState({
          id: response.data.data.id,
          employee_name: response.data.data.employee_name,
          employee_salary: response.data.data.employee_salary
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeTitle(e) {
    this.setState({
      employee_name: e.target.value
    });
  }

  onChangecompleted(e) {
    this.setState({
      employee_salary: e.target.value
    });
  }

  saveEmployee() {
    var data = {
      employee_name: this.state.employee_name,
      employee_salary: this.state.employee_salary
    };

    debugger;
    if (this.state.id > 0) {
      EmployeesService.update(this.state.id, data)
        .then(response => {
          this.setState({
            id: response.data.id,
            employee_name: response.data.employee_name,
            employee_salary: response.data.employee_salary
          });
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      EmployeesService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            employee_name: response.data.employee_name,
            employee_salary: response.data.employee_salary
          });
        })
        .catch(e => {
          console.log(e);
        });
    }

  }

  deleteEmployee() {    
    EmployeesService.delete(this.state.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/tutorials')
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEmployee() {
    this.setState({
      id: null,
      employee_name: "",
      employee_salary: ""
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newEmployee}>
              Add
            </button>
          </div>
        ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.employee_name}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="completed">completed</label>
                <input
                  type="text"
                  className="form-control"
                  id="completed"
                  required
                  value={this.state.completed}
                  onChange={this.onChangecompleted}
                  name="completed"
                />
              </div>

              <button onClick={this.saveEmployee} className="btn btn-success">
                Submit
            </button>
            <button onClick={this.deleteEmployee} className="btn btn-success">
                Delete
            </button>
            </div>
          )}
      </div>
    );
  }


}
export default Employee;
