import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
  <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor='addItem'>Add item</label>
    <input autoFocus id='addItem' type='text' placeholder='Add item' required value={newItem}
    onChange={(e) => setNewItem(e.target.value)}/>
    <button type='submit' aria-label='Add item'><FaPlus/></button>
  </form>
  )
}

export default AddItem