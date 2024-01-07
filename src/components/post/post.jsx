import { useState } from "react"
import PropTypes from 'prop-types'
import Reply from "../reply"
import Vote from "../vote/vote"
import PostHeader from "./postHeader"
import ModifyPost from "../modifyPost"
import './postStyles.css'

function Post(props) {

  const postStyle = {
    'boxShadow':'1px 1px 1px 1px rgba(0, 0, 0, 0.3)',
    'borderRadius' : '5px',
    'width' : '50%'
  }
    const { isCurrentUser, postContent, count, replyingTo,id} = props
    const [voteCount, setVoteCount] = useState(count)

  return (
    
   <div className={`container-fluid d-flex mt-3 post-responsive ${props.className}`} style={postStyle} >

      <div className="vote" style={{'width':'40px'}}>
        <Vote count = {voteCount} downvote = {() => {voteCount > 0 ? setVoteCount(voteCount-1) : setVoteCount(0)}} upvote ={() => {setVoteCount(voteCount + 1)}}/>
      </div>

      <div className="d-block w-100" style={{'marginLeft':'10px'}}>
      <div className='d-flex w-100'>

        <PostHeader 
          {...props}
          className ='justify-content-start'
          />
          {!isCurrentUser? <Reply setReply={props.addReply} className='justify-content-end'/> : <ModifyPost edit={props.editPost} delete={props.deletePost} id={id}/>}
        </div>
      <p className="" 
      style={{"color" : 'hsl(211, 10%, 45%)', 'fontWeight' : '600', 'margin':'15px', 'marginTop':'-15px'}}> 
      <span style={{'color':'hsl(238, 40%, 52%)', 'fontWeight':"600"}}>{replyingTo}</span> {postContent}</p>
           </div>
   </div>
  )
}

Post.propTypes = {
  profileImg : PropTypes.string,
  profileName : PropTypes.string,
  datePosted : PropTypes.string,
  isCurrentUser : PropTypes.bool,
  postContent : PropTypes.string,
  count : PropTypes.number,
  className : PropTypes.string,
  replyingTo : PropTypes.string,
  addReply : PropTypes.func,
  editPost : PropTypes.func,
  deletePost : PropTypes.func,
  id : PropTypes.number
}

export default Post