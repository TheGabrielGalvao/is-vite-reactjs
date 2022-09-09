import { ChangeEventHandler, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: ChangeEventHandler<HTMLInputElement>
}

export const CustomInput = ({ handleChange, ...props }: InputProps) => {
  return <input onChange={handleChange} {...props} />
}
