import React, {useMemo, useState} from "react";
import './Memocomponent.css'

const Memocomponent = () =>{

  const[count,setCount] = useState(0)
  const[todos,setTodos] = useState(['New Todo'])


  const expensivecalculation = (num) =>{
    console.log('Calculating...');
    for(let i = 0;i < 1000000000;i++){
      num +=1
    }
    return num;
  }

  const increment = () =>{
    setCount(prev=>prev +1)
  }

  const addTodo = ()=>{
    setTodos(prev =>[...prev,'New Todo'] )
  }


  // const calculation = expensivecalculation(count)

  const calculation = useMemo(()=>{
    console.log(12)
    return  expensivecalculation(count)
  },[count])


  return <div>
    <div>
      {todos.map((el)=>{
        return <div>{el}</div>
      })}
    </div>
    <div><button onClick={addTodo}>Add todo</button></div>
    <div>
      <div>{count}</div>
      <button onClick={increment}>Click Me</button>
      <div>{calculation}</div>
    </div>
  </div>
}

export default Memocomponent
