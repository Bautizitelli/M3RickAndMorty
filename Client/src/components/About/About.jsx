import React from "react"
import styles from "./About.module.css"
import { Link } from "react-router-dom"

export default function About(){
    return (
        <div className={styles.aboutContainer}>
        <div className={styles.about}>
           <h1>Bienvenidos a mi App creada con React.</h1>
           <h2>Rick & Morty App</h2>
           <p>En esta app podrán visualizar personajes de Rick & Morty 
            buscandolos por su numero de ID, agregarlos y removerlos de 
            una lista de favoritos con un botón y ordenarlos por su número
            de ID o por su género, como tambien ver 
            información mas detallada sobre cada uno haciendo clic en su
            nombre.
           </p>
            <span>Mi nombre es Bautista Zitelli, soy estudiante de Henry
                en la carrera desarrollo web full stack en su modalidad
                part-time. 
            </span>
            <p>
                <a className={styles.links} href="https://github.com/Bautizitelli"       target="_blank">GitHub</a>
                <a className={styles.links} href="https://www.linkedin.com/in/bautista-zitelli-32174025a/" target="_blank">LinkedIn</a>
                <a className={styles.links} href="https://t.me/Bautizitelli" target="_blank">Telegram</a>
            </p>
                <div className={styles.div}>
                    <Link to='/home'> 
                        <button className={styles.button}>Back to home!</button> 
                    </Link> 
                </div>
             </div>
        </div>
    )
}