import React, { useState } from 'react'
import {nanoid} from 'nanoid'
 
//import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const Form = ({addItem}) => {

    const [item,setItem]=useState('')
    

  
     
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("you entered ",item);

        if (!item) {
            toast.error('Please provide a value');
            return;
          }
          else{
            addItem(item);
            setItem('');   
            // this state update is done so that next time it can check and than update a new value in it
            // or old value should not be updated
          }
        
        }
  
console.log(item);
  return (
    <div className='form_container'>
        <div className='inputdiv'>

         <form onSubmit={handleSubmit}>
            <input value={item} type="text" onChange={(e)=>setItem(e.target.value)} />
            <button type='submit'  >Add Item</button>
        </form>

        </div>
      
    </div>
  )
}

export default Form
