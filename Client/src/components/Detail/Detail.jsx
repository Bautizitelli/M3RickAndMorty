import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from './Detail.module.css'

export default function Detail(){
    const [character, setCharacter] = useState({})
    const {detailId} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
      <div className={styles.cardContainer}>
        <div className={styles.aboutCard}>
             {character.name ?(
                <>
            <h2>Name:{character.name}</h2>
            <p>Status:{character.status}</p>
            <p>Specie:{character.species}</p>
            <p>Gender:{character.gender}</p>
            <p>Origin:{character.origin?.name}</p>
            <img className={styles.image}src={character.image} alt="" />
             </>)
             :(<h3>Loading...</h3>)
            }
              <Link to='/home'> <button className={styles.button}>Back to home!</button> </Link> 
        </div>
      </div>  
    )
}