import PropTypes from 'prop-types'
import deleteImg from '../assets/images/icon-delete.svg'
import editImg from '../assets/images/icon-edit.svg'

function ModifyPost(props) {

  return (
    <div className="d-flex m-3">
        <button style={{
        'backgroundColor' : '#fff',
        'border' : 'none', 
        'color':'hsl(358, 79%, 66%)',
        'fontWeight':'600'
    }} onClick={props.delete} className='d-flex' >
         <img src={deleteImg} alt="Delete Post" className='mt-1 mr-1'/>
               <p style={{'marginLeft':'7px'}}>Delete</p>
         </button>
         
        <button style={{
        'backgroundColor' : '#fff',
        'border' : 'none',
        'color' : 'hsl(212, 24%, 26%)',
        'fontWeight':'600'
    }} onClick={props.edit} className='d-flex'><img src={editImg} alt="Edit Post" className='mt-1 mr-1'/> <p style={{'marginLeft':'7px'}}>Edit</p></button>
    </div>
  )
}

ModifyPost.propTypes = {
    delete : PropTypes.func,
    edit : PropTypes.func
}

export default ModifyPost