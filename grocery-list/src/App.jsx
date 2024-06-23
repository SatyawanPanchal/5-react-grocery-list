import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Form'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Items from './Items'
import { nanoid } from 'nanoid'
import './style.css'
 
const getLocalStorage=()=>{
    list=localStorage.getItem('list');
  if(list)
    {
      list=JSON.parse(localStorage.getItem('list'));
    }
    else{
      list=[]
    }
    return list;
}

const setLocalStorage=(itemsTotal)=>{
  localStorage.setItem('list',JSON.stringify(itemsTotal));
}
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

function App() {
  const [itemsTotal, setItemsTotal] = useState(defaultList)
 // const [ items,setItems]=useState('')

  const addItem=(item)=>{

  const newItem={
    item:item,
    completed:false,
    id:nanoid()
  }
  

 const newitems=[newItem,...itemsTotal]
 setItemsTotal(newitems) 
 setLocalStorage(newitems)
 toast.success('item added successfully');
 
}
const removeItem=(itemToDelete)=>
{
  console.log("ok you are going to delete ",itemToDelete);
const itemsLeft = itemsTotal.filter((item)=>item.item!=itemToDelete)
setItemsTotal(itemsLeft);
setLocalStorage(itemsLeft)
toast.success('item deleted successfully');
}

const editItem = (itemId) => {
  
  const newItems = itemsTotal.map((item) => {
    if (item.id === itemId) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });
  setItemsTotal(newItems);
  setLocalStorage(newItems);
  toast.success('Item updated successfully!');
};


  return (
    <>
      <div className="main_container">
        <div className='material'>
          <ToastContainer position="top-center" />
          <div className='titlediv'><h1>Grocery-List</h1></div>
          <Form addItem={addItem} />
          <Items
            itemsInTotal={itemsTotal}
            removeItem={removeItem}
            editItem={editItem}
          />
        </div>
      </div>
    </>
  );
}

export default App
