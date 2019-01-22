import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.handler(this.state.title, this.state.description);
    this.setState({ title: "", description: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Titulo</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
        </div>
        <div>
          <label>Descrição</label>
          <input
            name="description"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
        </div>
        <div>
          <button type="submit">Adicionar</button>
        </div>
      </form>
    );
  }
}

export default Form;
