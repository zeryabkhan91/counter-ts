import React from 'react'
import { ButtonProps } from '../../types'
import "./button.css"

function Button({ onSubmit, children, ...props }: ButtonProps) {
  return (
    <button {...props} onClick={onSubmit}>{children}</button>
  )
}

export default Button