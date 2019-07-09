import React from 'react';
import './styles/BlogPost.scss';

class BlogPost extends React.Component {
        render(){
            return(
                <main className="Blog_post">
                    {this.props.children}
                </main>
            );
        }
}
export default BlogPost;