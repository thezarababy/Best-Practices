import React from 'react'

const PiggyBtn = (props) => {
  return (
    <div>
        <button
        className={`${props.textTransform} ${props.btnBg} ${props.textColor}`}>
            {props.title}
        </button>
    </div>
  )
}

export default PiggyBtn