import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
// const [value,setValue] = useState()
// const onClickDiv = (e) =>{
//     console.log(e)
// }
//
//   const onChangeTextInput =  (e) =>{
//     console.log(e)
//     setValue(e.target.value)
//  }

// const onChangeCheckbox =  (e) =>{
//     console.log(e)
//     setValue(e.target.checked)
//   }


  const {count} = useSelector(state => state.increment)
  const dispatch = useDispatch()

  const onIncrement = () =>{
    dispatch({type:'INCREMENT'})
  }

  const onDecrement = () =>{

  }


  return <div>
    <h1>Home</h1>

    <div>{count}</div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>




    {/*<TodoList todos={data}/>*/}
    {/*<div onClick={(event)=>onClickDiv(event)}>Div</div>*/}
    {/*<input type="text" value={value} onChange={onChangeTextInput}/>*/}
    {/*<input type="checkbox" checked={value} onChange={onChangeCheckbox}/>*/}
    {/*{value &&*/}
    {/*    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto consequuntur dicta*/}
    {/*        doloremque dolores eaque eligendi eum nihil! Culpa, ut.</div>*/}
    {/*}*/}

  </div>
}


export default Home
