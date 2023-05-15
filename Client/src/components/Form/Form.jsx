import React from "react";
import styles from "./Form.module.css"
import { useState } from "react";
import validation from "./validation";
// import login from "../../App"

export default function Form({login}){

    const [userData, setUserData] =useState({
                username: '',
                password: '' 
            });

    const [errors, setErrors]= useState({
        username: '',
        password: '' 
    });        

    const handleinputChange=(event)=>{
        const value= event.target.value
         setUserData({...userData, [event.target.name]: value})
         validation({...userData,[event.target.name]: value}, errors, setErrors)
       
   }        
  const handleSubmit=(event)=>{
    event.preventDefault();
    login(userData)
  }
    return (
        <div className={styles.formContainer}>     
            <form className={styles.formStyle} onSubmit={handleSubmit}>
                <div>
                    <label className={styles.labelStyle}htmlFor="username">Username:</label>
                    <input 
                        className={styles.input} 
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleinputChange}
                    />
                    <p>{errors.username}</p>
                </div>
                <div>
                    <label className={styles.labelStyle} htmlFor="password">Pasword:</label>
                    <input 
                        className={styles.input} 
                        type="password" 
                        name="password"
                        value={userData.password}
                        onChange={handleinputChange}
                     />
                     <p>{errors.password}</p>
                </div>
                    <button className={styles.button} typeof="submit" >Login</button>
            </form>
        </div>
    )
}