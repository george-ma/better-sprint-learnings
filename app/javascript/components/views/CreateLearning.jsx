import React from "react"
import { Link } from "react-router-dom"

class CreateLearning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      tags: ""
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    alert('A learning was submitted: '+ this.state.tags)
    event.preventDefault();
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
                <label htmlFor="recipeName">Learning name</label>
                <input
                  type="text"
                  id="name"
                  // id="learningName"
                  className="form-control"
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipeIngredients">Tags</label>
                <input
                  type="text"
                  id="tags"
                  className="form-control"
                  // required
                  onChange={this.handleChange}
                />
                <small id="tagsHelp" className="form-text text-muted">
                  Separate each tag with a comma.
                </small>
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