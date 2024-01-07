import PropTypes from 'prop-types'
import reply from '../assets/images/icon-reply.svg'


function Reply({className, setReply}) {
const style = {
    'color' : 'hsl(212, 24%, 26%)',
    // 'cursor' : 'pointer',
    'marginTop' : '14px',
    'border':'none',
    'backgroundColor' :'#fff'
    }

  return (
    <button style={style} onClick={setReply} className={`d-flex reply-button ${className}`} >
        <img src={reply} alt="reply icon" width={20} height={15} style={{'marginTop' : '5px', 'marginRight' : '5px'}}/>
        <p style={{'fontWeight' : '700', 'fontSize' : '17px'}}>Reply</p>
    </button>
  )
}

Reply.propTypes = {
    setReply : PropTypes.func,
    className : PropTypes.string
}

export default Reply