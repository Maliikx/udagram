import React from 'react'

const Cmnt = (props) => {
  return (
      <div className='text-content w-full bg-secondary rounded-br-none  rounded-xl p-1 outline-none'>
          <span>
              {props.cmnt}
          </span>
    </div>
  )
}

export default Cmnt