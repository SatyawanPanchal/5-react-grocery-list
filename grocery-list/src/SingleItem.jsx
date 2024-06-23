import {React,useState} from 'react'

const SingleItem = ({item,editItem,removeItem}) => {
    const[checked,setChecked]=useState(item.completed);
  return (
    <>
             <input type="checkbox" checked={item.completed}  onChange={()=>editItem(item.id)}/>
            <span className= {checked ?'com':'notcom'}>{item.item}</span>
            <button onClick={()=>removeItem(item.item)}>Delete</button>
    </>
  )
}

export default SingleItem
