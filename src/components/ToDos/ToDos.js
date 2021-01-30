import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom";

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
                  <td>sdsdssdsdsd{todo.completed}</td>
                  <td><button onClick={this.editToDo} >Edit</button></td>
                  <td><button onClick={this.editToDo} >Edit</button></td>
                  <Link to="/todo/1">Edit</Link>
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
  fetch('http://jsonplaceholder.typicode.com/ToDos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(data);
    })
    .catch(console.log)
}
   
  }
export default ToDos;
