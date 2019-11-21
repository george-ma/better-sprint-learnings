import React from "react"
import ReactTags from "react-tag-autocomplete"

class LearningForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label htmlFor="learningName">Learning name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            required
            value={this.props.name}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <ReactTags
            tags={this.props.tags}
            suggestions={[]}
            allowNew={true}
            allowBackspace={false}
            handleDelete={this.props.onDelete}
            handleAddition={this.props.onAddition}
          />
        </div>
        <label htmlFor="description">Learning Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="5"
          required
          value={this.props.description}
          onChange={this.props.onChange}
        />
        <button type="submit" className="btn custom-button mt-3">
          {this.props.title}
        </button>
      </form>
    );
  }

}

export default LearningForm;