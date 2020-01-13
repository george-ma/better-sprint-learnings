import React from "react"
import ReactTags from "react-tag-autocomplete"
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class LearningForm extends React.Component {
  constructor(props) {
    super(props);
  }

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
        <Editor
          editorState={this.props.description}
          toolbarClassName="learning-toolbar"
          wrapperClassName="learning-wrapper"
          editorClassName="learning-editor"
          onEditorStateChange={this.props.onEditorChange}
          toolbar={{
            options: ['inline', 'blockType', 'link', 'list'],
            list: {inDropdown: true}
          }}
        />
        <button type="submit" className="btn custom-button mt-3">
          {this.props.title}
        </button>
      </form>
    );
  }

}

export default LearningForm;