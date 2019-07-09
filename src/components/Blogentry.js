import React from 'react';
import './styles/Blogentry.scss';

class BlogEntry extends React.Component {
    constructor(props){
        super(props);
        this.article = React.createRef();
    }
    render(){
        return(
            <article className="Blog-Entry__container" ref={this.article}>
                <h2 className="headline-three">{this.props.title}</h2>
                <p className = "Blog-Entry__p">{this.props.description}</p>
                <div className="Blog-Entry__media-container">
                    <BlogMedia media={this.props.media} poster={this.props.poster} mediaType={this.props.mediaType}/>
                </div>
            </article>
        )
    }
    componentDidMount(){
        console.log(this.article.current)
        if (this.props.position==='left'){
            this.article.current.classList.add('left')
        }
        
    }
}

class BlogMedia extends React.Component{
    render(){
        switch(this.props.mediaType){
            case 'video':
                return(
                    <video src={this.props.media} poster={this.props.poster} preload="auto" loop autoplay>
                    </video>
                );
            default:
            case 'img':
                return(
                
                    <img src={this.props.media} alt="imagen de la entrada"/>
                );
                
        }
    }
}
export default BlogEntry;