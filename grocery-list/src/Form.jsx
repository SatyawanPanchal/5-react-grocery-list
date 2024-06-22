import React, { useState } from 'react'
import {nanoid} from 'nanoid'
 
//import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const Form = () => {

    const [item,setItem]=useState('')
    const [itemsInGrocery,setItemsInGrocery]=useState('')

    console.log("you typed ",item);
     
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("you entered ",!item);

        if (!item) {
            toast.error('Please provide a value');
            return;
          }
        

        const newItem={
            item:item,
            completed:false 
              
        }

            

    }

  return (
    <div className='form_container'>
        <div className='inputdiv'>

         <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setItem(e.target.value)} />
            <button type='submit' onClick={handleSubmit}>Add Item</button>
        </form>

        </div>
      
    </div>
  )
}

export default Form
