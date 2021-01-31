import React, { Component } from 'react'
import ToDosService from "../../service/ToDos.service";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangecompleted = this.onChangecompleted.bind(this);
    this.saveToDo = this.saveToDo.bind(this);
    this.newToDo = this.newToDo.bind(this);

    this.state = {
      id: null,
      title: "",
      completed: "",
      published: false,

      submitted: false
    };
  }

  componentDidMount() {
    const selectedId = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    console.log("selected Id;" + selectedId);

    if (selectedId != -1) {
      this.getToDo(selectedId)
    }
  }

  getToDo(id) {
    ToDosService.get(id)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          completed: response.data.completed
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangecompleted(e) {
    this.setState({
      completed: e.target.value
    });
  }

  saveToDo() {
    var data = {
      title: this.state.title,
      completed: this.state.completed
    };

    debugger;
    if (this.state.id > 0) {
      ToDosService.update(this.state.id, data)
        .then(response => {
          this.setState({
            id: response.data.id,
            title: response.data.title,
            completed: response.data.completed,
            published: response.data.published,

            submitted: true
          });
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      ToDosService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            title: response.data.title,
            completed: response.data.completed,
            published: response.data.published,

            submitted: true
          });
        })
        .catch(e => {
          console.log(e);
        });
    }

  }

  newToDo() {
    this.setState({
      id: null,
      title: "",
      completed: "",
      published: false,

      submitted: false
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newToDo}>
              Add
            </button>
          </div>
        ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
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

              <button onClick={this.saveToDo} className="btn btn-success">
                Submit
            </button>
            </div>
          )}
      </div>
    );
  }


}
export default ToDo;
