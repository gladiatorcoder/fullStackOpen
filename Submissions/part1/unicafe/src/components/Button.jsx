import React from 'react'

const Button = ({onClick, text}) => {
  const handleClick = (text) => {
    onClick(text.toLowerCase());
  }
  return (
    <button onClick={() => handleClick(text.toLowerCase())}>{text}</button>
  )
}

export default Button