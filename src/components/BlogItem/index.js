import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemData} = props
  const {title, topic, imageUrl, avatarUrl, author, id} = blogItemData

  return (
    <Link className="item-link" to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img className="item-image" alt={`item${id}`} src={imageUrl} />
        <div className="item-info-container">
          <p className="item-info">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="item-author-info-container">
            <img className="avatar-image" alt={`avatar${id}`} src={avatarUrl} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
