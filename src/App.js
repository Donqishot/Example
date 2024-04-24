import React, {useEffect, useState} from "react";
import './App.css'
import Button from "./components/Button/Button";
import axios, {get} from "axios";
import Todolist from "./components/Todolist/Todolist";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

const App: React.FC = () => {
  //
  // const[count,setCount] = useState(10)
  // const [obj,setObj] = useState({
  //   id:1,
  //   name:'Jone',
  //   age:36
  // })
  //
  // const data = [
  //   {id:1,name:'Save'},
  //   {id:2,name:'Back'},
  //   {id:3,name:'Ok'}
  // ]


  // const onClickButton = () =>{
  //   // setCount(prev => prev +1)
  //   setObj(prev =>{
  //     return {...prev,name:'dsddd'}
  //   })
  // }


  // useEffect(() => {
  //   console.log(1)
  // }, [obj.name]);

  //
  // const buttonHandler = (id,name) =>{
  //   console.log(id,name)
  // }
  //
  // const [todos, setTodos] = useState([])


  // const gettodos = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
  //     setTodos([...response.data])
  //   }).catch((e) => {
  //     console.log(e)
  //   })
  // }

  // useEffect(() => {
  //   gettodos()
  // }, []);


  return <div className={'App'}>

    {/*<button onClick={gettodos}>Click Me</button>*/}

    <div>
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/about_us'} element={<AboutUs/>}/>
          <Route path={'/contact_us'} element={<ContactUs/>}/>
          <Route path={''} element={<Home/>}/>
        </Route>
        <Route path={'*'} element={<div>Not found</div>}/>

      </Routes>

    </div>


    {/*/!*<h1>App</h1>*!/*/}
    {/*/!*<div>{count}</div>*!/*/}
    {/*/!*<p>{obj.id}</p>*!/*/}
    {/*/!*<p>{obj.name}</p>*!/*/}
    {/*/!*<p>{obj.age}</p>*!/*/}
    {/*/!*<button onClick={onClickButton}>Click Me</button>*!/*/}


    {/*/!*{*!/*/}
    {/*/!*  data.map((item)=>{*!/*/}
    {/*/!*    return <Button key={item.id} name={item.name} onClick={()=>buttonHandler(item.id,item.name)}/>*!/*/}
    {/*/!*  })*!/*/}
    {/*}*/}


  </div>
}

export default App
