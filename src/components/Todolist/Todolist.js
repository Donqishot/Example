import React, {useContext} from "react";
import Button from "../Button/Button";
import ButtonContext from "../../Context/buttonContext";

const Todolist = ({todos,addTodo}) => {

  const buttonState = useContext(ButtonContext)

  console.log('buttonState', buttonState)
  return <div>
    <div>
      <Button name={buttonState.name}/>
    </div>
    <div>
      {todos.map((el) => {
        return <div>{el.title}</div>
      })}
    </div>

  </div>
}

export default Todolist
