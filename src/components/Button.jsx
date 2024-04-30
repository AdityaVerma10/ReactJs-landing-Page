import React from 'react'

function Button({text,backgroundColor="#fff",styling}) {
  return (
    <button style={
        {...styling}
    }>
        {text}
    </button>
  )
}

export default Button