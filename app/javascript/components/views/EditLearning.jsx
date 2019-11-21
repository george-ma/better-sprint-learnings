import React from "react"
import { Link } from "react-router-dom"
import LearningForm from "../LearningForm";
import axios from "axios";

class EditLearning extends React.Component {
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

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/api/v1/show/${id}`)
    .then(res => {
      const data = res.data;
      this.setState({ 
        name: data.name,
        tags: data.tags,
        description: data.description
      })
    })
    .catch(error => {
      console.log(`Error loading learnings: ${error}`);
      this.props.history.push("/");
    })
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

    const id = this.props.match.params.id;
    const url = `/api/v1/edit/${id}`;

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
      .then(response => this.props.history.push(`/learning/${id}`))
      .catch(error => console.log(error.message));
  }

  render() {
    const learningPath = `/learning/${this.props.match.params.id}`
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Edit your learning!
            </h1>
            
            <LearningForm
              title="Edit learning"
              name={this.state.name}
              tags={this.state.tags}
              description={this.state.description}
              onDelete={this.handleDelete}
              onAddition={this.handleAddition}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />

            <Link to={learningPath} className="btn btn-link mt-3">
              Back to learning
            </Link>
          </div>
        </div>
      </div>
    );
  }

}

export default EditLearning;