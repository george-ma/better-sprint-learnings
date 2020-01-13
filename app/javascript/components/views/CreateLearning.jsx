import React from "react"
import { Link } from "react-router-dom"
import LearningForm from "../LearningForm";
import { EditorState, convertToRaw } from "draft-js"

class CreateLearning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tags: [],
      description: EditorState.createEmpty() 
    }
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);

    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleDelete(i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }

  handleAddition(tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
  }

  handleEditorChange(event) {
    this.setState({ description: event})
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const url = "/api/v1/learnings/create";
    const { name, tags } = this.state;
    
    // Convert the markdown text to JSON
    const description = convertToRaw(this.state.description.getCurrentContent());

    console.log(description)
    if (name.length == 0)
      return;

    const body = {
      name,
      tags,
      description
    }; 

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response (POST Learning) failed.");
      })
      .then(response => this.props.history.push(`/learning/${response.id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-8 offset-lg-2">
            <h1 className="font-weight-normal mb-5">
              Add a new learning to the Flipp board!
            </h1>
            
            <LearningForm
              title="Create learning"
              name={this.state.name}
              tags={this.state.tags}
              onDelete={this.handleDelete}
              onAddition={this.handleAddition}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              description={this.state.description}
              onEditorChange={this.handleEditorChange}
            />

            <Link to="/learnings" className="btn btn-link mt-3">
              Back to learnings
            </Link>
          </div>
        </div>
      </div>
    );
  }

}

export default CreateLearning;