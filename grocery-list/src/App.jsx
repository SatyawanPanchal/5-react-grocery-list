import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Form'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Items from './Items'
 

function App() {
  const [itemsTotal, setItemsTotal] = useState([])

  return (
    <>
    <ToastContainer position='top-center' />
      <Form />

      <Items itemsInTotal={itemsTotal}/>
      
    </>
  )
}

export default App
