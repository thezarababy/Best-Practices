import React from 'react'

const PiggyBtn = (props) => {
  return (
    <div>
        <button
        className={`${props.textTransform} ${props.btnBg} ${props.textColor} ${props.padding} ${props.radius} ${props.margin} ${props.border}`}>
            {props.title}
        </button>
    </div>
  )
}

export default PiggyBtn