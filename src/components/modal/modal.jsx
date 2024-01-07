import PropTypes from 'prop-types'

function Modal({children, turnOffModal, deletePost}) {
   const ModalBackgroundStyle = {
    'position' : 'fixed',
    'zIndex' : '1',
    'left' :'0',
    'top' : '0',
    'width' : '100%',
    'height' : '100%',
    'overflow' : 'auto',
    'backgroundColor' : 'rgba(0,0,0,0.5)'
   }

   const ModalBodyStyle = {
    'backgroundColor' : '#fff',
    'margin' : '15% auto',
    'padding' : '20px',
    'width' : '20%',
    'borderRadius' : '10px'
   }

   const buttonStyle = {
    'width':'120px', 
    'padding':'5px', 
    'borderRadius':'5px' , 
    'margin':'5px', 
    'color':'#fff', 
    'backgroundColor': 'hsl(358, 79%, 66%)',
    'border':'none'
   }

  return (
    <div className="w-100 h-100" style={ModalBackgroundStyle} onClick={turnOffModal}>
        <div style={ModalBodyStyle} onClick={e => e.stopPropagation()}>
            <h4 className='font-weight-bold p-1'>Delete comment</h4>
            <p style={{'color':'hsl(211, 10%, 45%)', 'fontWeight':"normal", 'fontSize':'1em'}} className='p-1'>Are you sure you want to delete this
                comment? This will remove the comment
                and can&apos;t be undone
            </p>
            <div className="d-flex">
                <button type="reset" onClick={turnOffModal} style={{...buttonStyle, backgroundColor:'hsl(211, 10%, 45%)'}}>No, Cancel</button>
                <button type="submit" style={buttonStyle} onClick={deletePost}>Yes, Delete</button>
            </div>
            {children}
        </div>
    </div>
  )
}

Modal.propTypes = {
    children : PropTypes.any,
    turnOffModal : PropTypes.func,
    deletePost : PropTypes.func
}

export default Modal