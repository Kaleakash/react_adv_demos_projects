import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPost } from '../features/posts/postsSlice'

const CreatePost = () => {
  // Set the initial state for the form
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [addPostRequestStatus, setAddPostRequestStatus] = useState('idle')

  // Get the dispatch function
  const dispatch = useDispatch()

  // Get the navigate function [replace the history.push() method]
  const navigate = useNavigate()

  // Handle form field value changes
  const onTitleChange = (e) => setTitle(e.target.value)
  const onBodyChange = (e) => setBody(e.target.value)

  /* 
    Get the Boolean value based on whether the form is empty or not && the post request status.
    We use the Boolean value returned to toggle the disbale status submit button
  */
  const canSavePost =
    [title, body].every(Boolean) && addPostRequestStatus === 'idle'

  // Handle form submission
  const handleAddPost = async (e) => {
    e.preventDefault()
    const post = { title, body }
    if (canSavePost) {
      try {
        setAddPostRequestStatus('pending')
        await dispatch(addPost(post)).unwrap()
        setTitle('')
        setBody('')

        navigate('/')
      } catch (err) {
        console.error('Unable to create post:', err)
      } finally {
        setAddPostRequestStatus('idle')
      }
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className='col-4'>
            <h3>Create Post</h3>
        </div> 
      </div>

      <div className="row">

        <h5>Add New Post</h5>
        <form onSubmit={handleAddPost}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={onTitleChange}
              value={title}
              className='form-control'
            />
            <br/>
            <label>Content</label>
            <br/>
            <textarea
              id="bodyContent"
              name="bodyContent"
              cols="28"
              rows="5"
              onChange={onBodyChange}
              value={body}
              className='form-control'
            />
            <br/>
            <button type="submit" className="btn btn-danger" disabled={!canSavePost}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
