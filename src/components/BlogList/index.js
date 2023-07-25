import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div className="blogs-list-container" data-testid="loader">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsList.map(eachItem => (
            <BlogItem key={eachItem.id} blogItemData={eachItem} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
