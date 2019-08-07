import React from "react";

class BlogPost extends React.Component {
  render() {
    return <main className="Blog_post">{this.props.children}</main>;
  }
}
export default BlogPost;
