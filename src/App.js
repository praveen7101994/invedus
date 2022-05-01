import './styles.css'
import React, {useState, useEffect} from 'react'
import wpImg from './wpImg.png'
import userImg from './user.png'
import { Link } from "react-router-dom";

// let ContactList = [
//   {
//     name : 'Person One',
//     phone : '1234567890',
//     type :'office',
//     isWhatsapp : true ,
//     profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/220px-Tony_Robbins.jpg'
//   },
//   {
//     name : 'Person Two',
//     phone : '1234567890',
//     type :'personal',
//     isWhatsapp : true ,
//     profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/220px-Tony_Robbins.jpg'
//   },
//   {
//     name : 'Person Two',
//     phone : '1234567890',
//     type :'personal',
//     isWhatsapp : true ,
//     profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/220px-Tony_Robbins.jpg'
//   },
//   {
//     name : 'Person Two',
//     phone : '1234567890',
//     type :'personal',
//     isWhatsapp : true ,
//     profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/220px-Tony_Robbins.jpg'
//   },
//   {
//     name : 'Person Two',
//     phone : '1234567890',
//     type :'personal',
//     isWhatsapp : true ,
//     profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/220px-Tony_Robbins.jpg'
//   },
//   {
//     name : 'Person Two',
//     phone : '1234567890',
//     type :'personal',
//     isWhatsapp : true ,
//     profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tony_Robbins.jpg/220px-Tony_Robbins.jpg'
//   },
// ]


function App() {
  const [ContactList, setContactList] = useState([])

  const handleDelete = (e) => {
    console.log(e.target.id)
    let list =  JSON.parse(localStorage.getItem('value'))
    let updatedList = list.filter(item => item.id != e.target.id)
    console.log(updatedList)
    localStorage.setItem('value', JSON.stringify(updatedList))
    setContactList(updatedList)
  }

  useEffect(() => {
    let storedList = JSON.parse(localStorage.getItem('value'))
    let prev = storedList ? storedList : []
    setContactList(prev)
  }, [])
  
  return (
    <div>
     List of contacts
     <div className="ContactListContainer">
       {
         ContactList && ContactList.length > 0 && ContactList.map((contact) => (
           <div className='ContactContainer'>
               <div className='ContactImage'> <img src={contact.profilePicture ? contact.profilePicture : userImg} /> </div>
             <div className='Contact'>
               {contact.wp == 'true' && <div className='wpImg'><img src={wpImg} /></div>}
               <div className='ContactInfo'>
                  <div>Name: {contact.name}</div>
                  <div>Mobile: {contact.phone}</div>
                  <div>Type: {contact.type}</div>
               </div>
             </div>
             <div className='CardAction'>
               <button key={contact.id} id={contact.id} onClick={(e) => handleDelete(e)}>Delete</button>
               <button><Link to={`/edit-contact/${contact.id}`}>Edit</Link></button>
               
             </div>
           </div>
         ))
       }
     </div>
    </div>
  );
}

export default App;
