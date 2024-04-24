import Todolist from "../Todolist/Todolist";
import {useCallback, useState} from "react";

const Cbmemocomponent = () => {
  const[count,setCount] = useState(0)
  const[todos,setTodos] = useState(['New Todo'])

  const increment = () =>{
    setCount(prev=>prev +1)
  }

  const addTodo = useCallback(()=>{
     setTodos(prev =>[...prev,'New Todo'] )
  },[todos])



  return <div>
    <Todolist todos={todos} addTodo={addTodo}/>
    <div>{count}</div>
    <button onClick={increment}>Click Me</button>
  </div>
}

export default Cbmemocomponent
