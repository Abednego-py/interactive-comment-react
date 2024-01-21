import PropTypes from 'prop-types'
import { useState } from 'react'
import './postStyles.css'

function NewPost({currentUserImg, onSubmit, setContent, isReply, className}) {

  const [textContent, setTextContent] = useState('')

    const newPostStyle = {
        'boxShadow':'1px 1px 1px 1px rgba(0, 0, 0, 0.3)',
        'borderRadius' : '10px',
        'bottom' :'20px',
        'left' : '0',
        'right' : '0',
        'width' : '50%'
      }

    const handleTextChange = (e) => {
      setTextContent(e.target.value)
      setContent(e.target.value)
    }
    
  return (
    <div className={`container-fluid d-flex mt-5 p-3 post-responsive ${className} `} style={newPostStyle}>
        <img src={currentUserImg} alt="" width={30} height={30}/>
        <textarea name="" id="" 
        className='w-75 p-3' 
        placeholder="Add a comment.." 
        style={{'height' : '100px', 'marginLeft': '20px', 'marginRight': '30px', 'cursor':'pointer', 'appearance': 'none'}} 
        value={textContent}
        onChange={handleTextChange}/>
        <button type="submit" onClick={onSubmit} style={{'height': '35px', 'width':'70px', 'borderRadius':"5px", 'color':"#fff", 'backgroundColor':'hsl(238, 40%, 52%)', 'border':"none", 'fontSize':".9em", 'fontWeight':'600'}} className='user-button'>{isReply? 'REPLY': 'SEND'}</button>
        </div>
  )
}

NewPost.propTypes = {
    currentUserImg : PropTypes.string,
    onSubmit : PropTypes.func,
    setContent : PropTypes.func,
    isReply : PropTypes.bool,
    className : PropTypes.string
}

export default NewPost