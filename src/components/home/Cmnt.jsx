import React from 'react'

const Cmnt = (props) => {
  return (
      <div className='text-content w-full bg-secondary rounded-br-none  rounded-xl p-1 outline-none'>
          <div>{props.cmnt.user.username}</div>
          <span>
              {props.cmnt.content}
          </span>
    </div>
  )
}

export default Cmnt