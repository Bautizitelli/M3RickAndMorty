import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [character, setCharacter]= useState("")
   

   const handleInputChange=(event)=>{
      const {value}= event.target; 
      setCharacter(value);
   }
      

   return (
      <div className={styles.header}>
          <div className={styles.nav}>
            <input 
               className={styles.input}
               type='search'
               onChange={handleInputChange}
               placeholder='ID del personaje' 
               autoFocus
               />
            <button className={styles.button} onClick={()=> props.onSearch(character)}>Agregar</button>
          </div>
      </div>
   );
}
