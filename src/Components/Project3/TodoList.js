import React,{useState} from 'react'


function TodoList() {
 
  const[todoInput,updateInput]=useState()
  const [todolist,updatetodo]=

  useState(
    [
      {
        id:1,
        task:'Apple'
      },
      {
        id:2,
        task:'Orange'
      },
      {
        id:3,
        task:'Lemon'
      },
    ]
  )

  let nextId=3;

  function   addNewTodo(){
    if(todoInput == ""){
   alert("Add some Text")
    }else{
    const newTodos =[
      ...todolist,{
        id:nextId++,
        task:todoInput
      }
     ]
     updatetodo(newTodos);
     updatetodo("");
    }
   
 
  }
 
  return (
    
    <div className="container mt-5 w-50" >
     
      <div className="input-group">
      <input className="form-control" onChange={(e)=>{
       const task= e.target.value
       updateInput(task)
        }} 
        type="text" 
        value={todoInput}/>

        <button onClick={()=>{
          addNewTodo()

        }}className="btn btn-primary">ADD</button>
      </div>
      <ul className="list-group mt-4" >
        {
         todolist.map((todo)=>{
          return(
            <li className="list-group-item">
            <p>{todo.task}</p>
            <button className="btn">❌</button>
          </li>
          )
         })
          
        }
   
      </ul>
  
    </div>
  )
}

export default TodoList
