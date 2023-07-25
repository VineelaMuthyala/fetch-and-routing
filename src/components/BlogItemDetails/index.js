import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      topic: data.topic,
      content: data.content,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogDetails} = this.state
    const {title, author, content, imageUrl, avatarUrl} = blogDetails

    return (
      <div className="blog-item-details-container">
        <h1 className="blog-details-title">{title}</h1>
        <div className="author-info-container">
          <img className="author-image" alt={author} src={avatarUrl} />
          <p className="author-name">{author}</p>
        </div>
        <img className="blog-image" alt={title} src={imageUrl} />
        <p className="content-text">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
