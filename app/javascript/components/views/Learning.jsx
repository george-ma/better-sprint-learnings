import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Learning extends React.Component {
  constructor(props) {
    super(props);
    this.state = { learning: { tags: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios.get(`/api/v1/show/${id}`)
      .then(res => {
        this.setState({ learning: res.data })
      })
      .catch(error => {
        console.log(`Error loading learnings: ${error}`);
        this.props.history.push("/");
      })
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
    const { learning } = this.state;
    let tagList = "No tags available";

    if (learning.tags.length > 0) {
      tagList = learning.tags
        .split(",")
        .map((tags, index) => (
          <li key={index} className="list-group-item">
            {tags}
          </li>
        ));
    }
    const learningDescription = this.addHtmlEntities(learning.description);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src="https://i.imgur.com/1rusDRn.jpg"
            alt={`${learning.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {learning.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Tags</h5>
                {tagList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Learning Description</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${learningDescription}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger">
                Delete Learning
              </button>
            </div>
          </div>
          <Link to="/learnings" className="btn btn-link">
            Back to learnings
          </Link>
        </div>
      </div>
    );
  }

}

export default Learning;