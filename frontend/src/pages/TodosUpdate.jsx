import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class TodosUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      content: "",
    };
  }

  handleChangeInputContent = async (event) => {
    const content = event.target.value;
    this.setState({ content });
  };

  handleUpdateTodo = async () => {
    const { id, content } = this.state;
    const payload = { content };

    await api.updateTodoById(id, payload).then((res) => {
      window.alert(`Todo updated successfully`);
      this.setState({
        content: "",
      });
    });
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const todo = await api.getTodoById(id);

    this.setState({
      content: todo.data.data.content,
    });
  };

  render() {
    const { content } = this.state;
    return (
      <Wrapper>
        <Title>Create Todo</Title>

        <Label>content: </Label>
        <InputText
          type="text"
          value={content}
          onChange={this.handleChangeInputContent}
        />

        <Button onClick={this.handleUpdateTodo}>Update Todo</Button>
        <CancelButton href={"/todos/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default TodosUpdate;
