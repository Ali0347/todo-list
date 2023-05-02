import React from 'react'
import { useState } from 'react'
import Todo_modal from './Todo_modal'

function TodoList () {

  const [input, setInput] = useState()
  const [mainArray, setMainArray] = useState([])
  const [editCheck, setEditCheck] = useState(false)
  const [editValue, setEditValue] = useState()

  function addFunc () {
    // mainArray.push(input)
    // setMainArray(mainArray)
if(editCheck){
  mainArray [editValue] = input
  setMainArray(mainArray)
  setEditCheck(false) 

}
else{
  if (input) {
  setMainArray([...mainArray, input])
} else { alert("ALERT! TASK BOX IS EMPTY, PLEASE PUT YOUR TASK") }
}
    
    setInput("")

  }

  function deleteFunc(index){
let tempArray =[...mainArray]
tempArray.splice(index,1)
    setMainArray(tempArray)
console.log("Delete", index)

  }
  function editFunc(index){
    setInput(mainArray[index])
    setEditValue(index)
    setEditCheck(true)

  }

 function deleteAllFunc(){
  setMainArray([])
 }
  return (
    <div className='container  p-5  mt-5'>
      <h1 className='  text-center text-danger text-muted'> <span className='text-dark'> Todo list : </span>By ALi Bahadur  &copy; </h1>

      <input type="text" className='form-control ' value={input} onChange={(e) => { setInput(e.target.value) }} />
      <button className='btn btn-success mt-3' onClick={addFunc}> Add+</button>


      <div className='mt-3'>
        <ol>
          {
            mainArray.map((item,index) => {
              return<>

               <li key={index}>{item}   <button className='ms-3 btn btn-danger' onClick={( ()=>{deleteFunc(index)} )}>Delete</button>
               <button className='ms-3 btn btn-danger' onClick={( ()=>{editFunc(index)} )}>Edit</button>
               </li>
               <br />
              
              </>


            })
          }
        </ol>
        {/* <button onClick={deleteAllFunc} className='btn btn-primary'>Delete All</button> */}

        <Todo_modal  dF={deleteAllFunc}/>
      </div>




    </div>
  )
}

export default TodoList

































