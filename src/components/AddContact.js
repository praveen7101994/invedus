import React, {useState} from 'react'
import './../styles.css'
export default function AddContact() {
  const [values, setValues] = useState({});
  const handleAddContact = () => {
    let storedList = JSON.parse(localStorage.getItem('value'))
    let prev = storedList ? storedList : []
    
    let newList = [...prev, {...values, id: prev.length}]
    localStorage.setItem('value', JSON.stringify(newList))
  }
  const handleCheck = () => {
    console.log(JSON.parse(localStorage.getItem('value')))
  }

  const handleInputChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className='AddContactContainer'>
      <label for="type">Enter Name:</label>
      <input onChange={(e) => handleInputChange(e)} type='text' name='name' placeholder='enter name' /><br/><br/>
      <label for="phone">Phone:</label>
      <input onChange={(e) => handleInputChange(e)} id='phone' type='text' name='phone' placeholder='enter phone' /><br/><br/>
      <label for="profilePicture">Profile Imge URL:</label>
      <input onChange={(e) => handleInputChange(e)} id='profilePicture' type='text' name='profilePicture' placeholder='enter image URL' /><br/><br/>
      <label for="type">Choose type:</label>
      <select onChange={(e) => handleInputChange(e)} id="type" name="type" form="carform">
        <option value="Office" >Office</option>
        <option value="Personal">Personal</option>
      </select><br/><br/>
      <p>Contact is Whatsapp or not</p>
      <input onChange={(e) => handleInputChange(e)}  type='radio' id="wpyes" name="wp" value="true" />
      <label for="wpyes">Yes:</label><br/>
      <input onChange={(e) => handleInputChange(e)} type='radio' id="wpno" name="wp" value="false" />
      <label for="wpno">No:</label><br/>
      <button onClick={handleAddContact}>Add Contact</button> 
      <button onClick={handleCheck}>Check</button> 
    </div>
  )
}
