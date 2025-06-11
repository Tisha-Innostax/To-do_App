import React, { useState } from 'react'
import axios from 'axios';

const Create = () => {
    const [task,setTask] = useState();
    const handleAdd = () =>
    {
         axios.post("http://localhost:5000/add" , {task: task})
         .then(result => 
            location.reload()
            // it will automatically reload our page 
         )
         .catch(err=> console.log(err))
    }
  return (
    <div className='create_form'>
      <input type="text" name="" id="" placeholder="Enter Task" onChange={(e)=> setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add To-do</button>
    </div>
  )
}

export default Create
