import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom";
import ToDosService  from "../../service/ToDos.service";

class ToDos extends Component {
  render() {
    return (
      <div>
        <center><h1>To List</h1></center>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{String(todo.completed)}</td>
                  <td><button onClick={this.editToDo} >Edit</button></td>
                  <td><button onClick={this.editToDo} >Edit</button></td>
                  <td><Link to="/todo/1">Edit</Link></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
editToDo() {
alert("inside")
}

state = {
  todos: []
};
componentDidMount() {
  ToDosService.GetAllData()
      .then(response => {
        debugger;
        this.setState({
          todos: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  // fetch('http://localhost:53973/Api/ToDo/GetAllData')
  //   .then(res => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     this.setState({ todos: data })
  //     console.log(data);
  //   })
  //   .catch(console.log)
}
   
  }
export default ToDos;
