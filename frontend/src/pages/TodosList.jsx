import React, { Component } from "react";
// import ReactTable from "react-table-6";
import api from "../api";

import styled from "styled-components";

// import "react-table-6/react-table.css";
import { DataGrid } from "@material-ui/data-grid";

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

class UpdateTodo extends Component {
  updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/todos/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

class DeleteTodo extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do tou want to delete the todo ${this.props.id} permanently?`
      )
    ) {
      api.deleteTodoById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllTodos().then((todos) => {
      this.setState({
        todos: todos.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { todos, isLoading } = this.state;
    console.log("TCL: TodosList -> render -> todos", todos);

    const columns = [
      {
        headerName: "ID",
        field: "_id",
        width: 200,
      },
      {
        headerName: "Content",
        field: "content",
        width: 200,
      },
      // {
      //   headerName: "",
      //   field: "Action",
      //   width: 200,
      //   valueGetter: (props) => {
      //     return (
      //       <span>
      //         <DeleteTodo id={props._id} />
      //       </span>
      //     );
      //   },
      // },
      // {
      //   headerName: "",
      //   field: "",
      //   width: 200,
      //   valueGetter: function (params) {
      //     return (
      //       <span>
      //         <UpdateTodo id={params._id} />
      //       </span>
      //     );
      //   },
      // },
    ];

    let showTable = true;
    if (!todos.length) {
      showTable = false;
    }

    return (
      <div
        style={{
          height: 400,
          width: "100%",
          padding: "0 40px 40px 40px",
          margin: "50px",
        }}
      >
        <DataGrid
          rows={todos}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        >

        </DataGrid>
      </div>
    );
  }
}

export default TodosList;
