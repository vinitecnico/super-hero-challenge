import React from 'react'
import './styles.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string
}

const Button: React.FC<ButtonProps> = ({ color, ...props }) => {
  return <button className={`btn btn-${color}`} {...props} />
}

export default Button
