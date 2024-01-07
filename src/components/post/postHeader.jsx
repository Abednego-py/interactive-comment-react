import PropTypes from 'prop-types'

function PostHeader(props) {
    const {profileImg, profileName, datePosted, isCurrentUser, className} = props
  return (
    <div className={`d-flex p-2 ${className}`} style={{"width":'87%'}}>
        <img src={profileImg} className='p-2' alt="profile image" width={48} height={48}/>
        <p className="p-2" style={{'fontWeight':'bold'}}>{profileName}</p>
        {isCurrentUser? <Tag /> : <></>}
        <p className='p-2' style={{"color" : 'hsl(211, 10%, 45%)', 'fontWeight' : '600'}}>{datePosted}</p>
    </div>
  )
}

PostHeader.propTypes = {
    profileImg : PropTypes.string,
    profileName : PropTypes.string,
    datePosted : PropTypes.string,
    isCurrentUser : PropTypes.bool,
    className : PropTypes.string
}

export default PostHeader

const Tag = () => {
    const tagStyles = {
        'backgroundColor' : 'hsl(238, 40%, 52%)',
        'color' : '#fff',
        'height' :'29px',
        'width':'35px',
        'paddingLeft':"5px",
        'paddingRight':'5px',
        'marginTop' : '6px'
    }
    return <div style={tagStyles}>
        <p style={{'marginBottom':'3px'}}>you</p>
    </div>
}