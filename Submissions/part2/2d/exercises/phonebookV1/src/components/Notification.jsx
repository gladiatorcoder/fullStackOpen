import React from 'react'

const Notification = ({isErr, message, closeNotification}) => {
  return (
    <div className="notificationBody">{isErr ?
        <div className='notification errorMessage'>
            <span>{message}</span>
            <span className='closeBtn' onClick={() => closeNotification()}>&times;</span>
        </div>
        :
        <div className='notification detail'>
            <span>{message}</span>
            <span className='closeBtn' onClick={() => closeNotification()}>&times;</span>
        </div>
    }</div>
  )
}

export default Notification