import './Button.css'
const Button = (props) =>{
  const {name = 'No props', onClick} = props
  return <button className={'button'} onClick={onClick}>{props.name}</button>
}

export default Button
