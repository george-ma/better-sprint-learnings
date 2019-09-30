import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Learnings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      learnings: []
    };
  }

  componentDidMount() {
    axios.get("/api/v1/learnings/index")
      .then(res => {
        this.setState({ learnings: res.data })
      })
      .catch(error => {
        console.log(`Error loading learnings: ${error}`);
        this.props.history.push("/");
      })
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
            <div className="text-right mb-3">
              <Link to="/new_learning" className="btn custom-button">
                Create New Learnings
              </Link>
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
export default Learnings;