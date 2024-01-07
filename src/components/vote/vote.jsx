import PropTypes from 'prop-types';
import minus from '../../assets/images/icon-minus.svg'
import plus from '../../assets/images/icon-plus.svg'
import '../../App.css'

function Vote({count, downvote, upvote}) {

  const imgStyle = {
    'color' : 'hsl(211, 10%, 45%)',
    'cursor' : 'pointer'
  }
  return (
    <div className='d-block m-2 pt-1 pb-2' style={{ 'backgroundColor' : 'hsl(223, 19%, 93%)' , 'borderRadius' : '25px', 'width' : '100%', 'height': '85px'}}>
      <div style={{'marginLeft':'12px'}}>
      <img src={minus} alt="" style={imgStyle} onClick={downvote}/>
        <p style={{'color' : 'hsl(212, 24%, 26%)', 'fontWeight' : '700','margin': 'auto'}}>{count}</p>
        <img src={plus} alt="" style={imgStyle} onClick={upvote}/>
      </div>
    </div>
  )
}

Vote.propTypes = {
  count : PropTypes.number,
  upvote : PropTypes.func,
  downvote : PropTypes.func
}
export default Vote