import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { EditorState, convertFromRaw } from "draft-js"
import { Editor } from "react-draft-wysiwyg"

class Learning extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      learning: { 
        id: 0,
        name: "",
        description: EditorState.createEmpty(),
        tags: [],
        created_at: "",
        updated_at: ""
      }
    };

    this.editLearning = this.editLearning.bind(this)
    this.deleteLearning = this.deleteLearning.bind(this)
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/api/v1/show/${id}`)
      .then(res => {  
        const content = convertFromRaw(JSON.parse(res.data.description))
        const editorState = EditorState.createWithContent(content)
        
        this.setState({
          learning: {
            id: res.data.id,
            name: res.data.name,
            description: editorState,
            tags: res.data.tags,
            created_at: res.data.created_at,
            updated_at: res.data.updated_at
          }
        })
      })
      .catch(error => {
        console.log(`Error loading learnings: ${error}`);
        this.props.history.push("/");
      })
  }
  
  editLearning() {
    const id = this.state.learning.id;
    this.props.history.push(`/learning/${id}/edit`)
  }

  deleteLearning() {
    const id = this.state.learning.id;

    const url = `/api/v1/destroy/${id}`

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
    })
      .then(response => {
        if (response.ok) {
          alert("Learning Deleted!")
          return response.json();
        }
        throw new Error("Network response (DELETE Learning) failed.");
      })
      .then(() => this.props.history.push("/learnings"))
      .catch(error => console.log(error.message))
  }

  render() {
    const { learning } = this.state;
    let tagList = "No tags available";
    
    if (learning.tags.length > 0) {
      tagList = learning.tags.map(tag => {
        return (
          <li key={tag.id} className="list-group-item">
            {tag.name}
          </li>
        )
      });
    }

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
              <Editor
                readOnly={true}
                editorState={learning.description}
                toolbarHidden={true}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-secondary mb-1" onClick={this.editLearning}>
                Edit Learning
              </button>
              <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#deleteConfirmation">
                Delete Learning
              </button>
              <div id="deleteConfirmation" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      Do you really wish to delete this learning?
                      This process cannot be undone.
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">
                        Cancel
                      </button>
                      <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.deleteLearning}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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