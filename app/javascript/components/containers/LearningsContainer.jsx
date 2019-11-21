import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class LearningsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagFilter: "",
      learnings: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  getLearnings(){
    axios.get("/api/v1/learnings/index")
      .then(res => {
        this.setState({ learnings: res.data })
      })
      .catch(error => {
        console.log(`Error loading learnings: ${error}`);
        this.props.history.push("/");
      })
  }

  componentDidMount() {
    this.getLearnings();
  }

  handleChange(event){
    this.setState({ [event.target.id]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const tagFilter = this.state.tagFilter

    if (tagFilter) {
      axios.get(`/api/v1/learnings/filterByTag/${tagFilter}`)
        .then(res => {
          this.setState({ learnings: res.data })
        })
        .catch(error => {
          console.log(`Error loading learnings: ${error}`);
          this.props.history.push("/");
        })
    } else { // No tag to filter by, get all learnings
      this.getLearnings();
    }
  }

  render() {
    const { learnings } = this.state;
    
    const allLearnings = learnings.map((learning, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src="https://i.imgur.com/mufV8Uh.png"
            className="card-img-top"
            alt={`${learning.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{learning.name}</h5>
            <Link to={`/learning/${learning.id}`} className="btn custom-button">
              View Learnings
            </Link>
          </div>
        </div>
      </div>
    ));

    const noLearnings = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No learnings yet. Why not <Link to="/new_learning">create one</Link>
        </h4>
      </div>
    );

    return (
      <div>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Flipp Learnings</h1>
            <p className="lead text-muted">
              A collection of learnings that teams have discovered throughout
              their sprint!
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="row">
              <div className="col-md mb-3">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    id="tagFilter"
                    className="form-control"
                    onChange={this.handleChange}
                  >
                  </input>
                  <button type="submit" className="btn custom-button mt-1">
                    Search by Tag
                  </button>
                </form>
              </div>
              <div className="col-md mb-3 text-right">
                <Link to="/learning" className="btn custom-button">
                  Create New Learning
                </Link>
              </div>
            </div>
            <div className="row">
              {learnings.length > 0 ? allLearnings : noLearnings}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </div>
    );
    
  }

}
export default LearningsContainer;