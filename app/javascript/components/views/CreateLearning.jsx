import React from "react"
import { Link } from "react-router-dom"
import ReactTags from "react-tag-autocomplete"

class CreateLearning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tags: [],
      description: ""
    }
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);

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

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const url = "/api/v1/learnings/create";
    const { name, tags, description } = this.state;

    if (name.length == 0 || description.length == 0)
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
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new learning to the Flipp board!
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="learningName">Learning name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <ReactTags
                  tags={this.state.tags}
                  suggestions={[]}
                  allowNew={true}
                  allowBackspace={false}
                  handleDelete={this.handleDelete}
                  handleAddition={this.handleAddition}
                />
              </div>
              <label htmlFor="description">Learning Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="5"
                required
                onChange={this.handleChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Create Learning
              </button>
              <Link to="/learnings" className="btn btn-link mt-3">
                Back to learnings
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default CreateLearning;