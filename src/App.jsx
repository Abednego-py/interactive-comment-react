import './App.css'
import Post from './components/post/post'
import data from '../data.json'
import NewPost from './components/post/NewPost'
import { useEffect, useState } from 'react'
import Modal from './components/modal/modal'

const currentDate = new Date();
const formattedDate = currentDate.toDateString();

function App() {
  let commentData = data.comments

 const [userOneReplies, setUserOneReplies] = useState(data.comments[0].replies)
 const [userTwoReplies, setuserTwoReplies] = useState(data.comments[1].replies) 
 const [post, setPost] = useState([...commentData, ...userOneReplies, ...userTwoReplies])
 const [isModalOpen, setModalOpen] = useState(false)
 const [content, setContent] = useState('')
 const [postID, setPostID] = useState()
 const [isReplySet, setReply] = useState(false)

 const addReply = (id) => {
  let chatWrappers = document.getElementsByClassName('wrapper')
  let newPost = document.getElementsByClassName('newPost')[0]
  setReply(true)
  chatWrappers[id-1].appendChild(newPost) 
  setPostID(id-1)

}

const addReplytoReply = (id) => {
  let replyWrappers = document.getElementsByClassName('reply-wrapper')
  let newPost = document.getElementsByClassName('newPost')[0]
  newPost.style.marginLeft = '30%'
  setReply(true)
  replyWrappers[id-3].appendChild(newPost)
}

 const editPost = (id) => {

 }

 const deletePost = (id) => {
  setPostID(id)
  setModalOpen(true)
 }

 const addPost = () => {
  let chatWrappers = document.getElementsByClassName('wrapper')
  let newPost = document.getElementsByClassName('newPost')[0]
  if(isReplySet == false)  {
  setPost([...post,  {
    "id": post.length + 1,
    "content": content,
    "createdAt": formattedDate,
    "score": 0,
    "user": {
      "image": { 
        "png": "../src/assets/images/avatars/image-juliusomo.png",
        "webp": "../src/assets/images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "replies": []
  }])
}
else{
  chatWrappers[postID].removeChild(newPost)
  switch (postID) {
    case 1:
      setUserOneReplies([...userOneReplies, {
        "id": userOneReplies.length + 1,
        "content": content,
        "createdAt": formattedDate,
        "score": 0,
        "replyingTo": 'amyrobson',
        "user": {
          "image": { 
            "png": "../src/assets/images/avatars/image-juliusomo.png",
            "webp": "../src/assets/images/avatars/image-juliusomo.webp"
          },
          "username": "juliusomo"
        }
      }])
      break;
    case 2:
      setuserTwoReplies([...userTwoReplies, {
        "id": userTwoReplies.length + 1,
        "content": content,
        "createdAt": formattedDate,
        "score": 0,
        "replyingTo": 'amyrobson',
        "user": {
          "image": { 
            "png": "../src/assets/images/avatars/image-juliusomo.png",
            "webp": "../src/assets/images/avatars/image-juliusomo.webp"
          },
          "username": "juliusomo"
        }
      }])
  }
}
 }

  return (
    <>

  {post && post.map((comment, index) => (
    <div key={index}>
    {comment.replies ? (
      <div className="wrapper">
      <Post
        profileImg={comment.user.image.png}
        profileName={comment.user.username}
        datePosted={comment.createdAt}
        isCurrentUser={comment.user.username == 'juliusomo'}
        postContent={comment.content}
        count={comment.score}
        replyingTo=''
        editPost={() => {editPost(comment.id)}}
        deletePost={() => {deletePost(comment.id)}}
        addReply={() => {addReply(comment.id)}}
        id={comment.id}
      />      
    </div> ) :  
  ( 
    <div className='reply-wrapper' style={{}}>
  <div className='d-flex' style={{'width':'75%', 'marginLeft':'25%'}}>

  <div className="divider" style={{'width':'2px','backgroundColor':'hsl(223, 19%, 93%)', 'marginLeft':'3%', 'marginTop':'20px'}}></div>

<div className="d-block" style={{"marginLeft":'3.5%', 'width':'60%'}} >

    <Post
    profileImg={comment.user.image.png}
    profileName={comment.user.username}
    datePosted={comment.createdAt}
    isCurrentUser={comment.user.username == 'juliusomo'}
    postContent={comment.content}
    count={comment.score}
    replyingTo={`@${comment.replyingTo}`}
    className='w-100'
    editPost={() => {editPost(comment.id)}}
    deletePost={() => {deletePost(comment.id)}}
    addReply={() => {addReplytoReply(comment.id)}}
    id={comment.id}
    />
</div>
</div>

</div>)}
</div> 

))}

 

    <NewPost 
      currentUserImg={data.currentUser.image.png}
      onSubmit={() => {addPost()}}
      setContent={(data) => {setContent(data)}}
      isReply={isReplySet}
      className='newPost'
    /> 

    {isModalOpen && 
    <Modal 
    turnOffModal={() => {setModalOpen(false)}} 
    deletePost={() => {
      setPost(post.filter(item => item.id !== postID))
      setModalOpen(false)
    }}
    >
      <></>
    </Modal> }

    </>
  )
}

export default App
