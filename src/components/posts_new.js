import React, { Component } from 'react';
import { reduxForm } from 'redux-form'


class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Create a New Post</h3>
        <div classname="form-group">
          <label>Tittle</label>
          <input type="text" className="form-control" />
        </div>
        <div classname="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" />
        </div>
        <div classname="form-group">
          <label>Content</label>
          <textarea className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
})(PostsNew);
