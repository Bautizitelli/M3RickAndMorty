import { NavLink } from 'react-router-dom';
import styles from './Card.module.css'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from "react-redux";
import { useState, useEffect } from "react";


export function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const { addFav, removeFav, myFavorites } = props;

   const handleFavorite = () => {
      isFav ? removeFav(props.id) : addFav(props);
      setIsFav(!isFav);
      
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites])
   
   return (
      <div className={styles.styleContainer}>
          {
         isFav ? (
            <button className={styles.button} onClick={handleFavorite}>❤️</button>
               ) : (
            <button className={styles.button} onClick={handleFavorite}>🤍</button>
               )}
         {!isFav && (  
            <button className={styles.button}
               onClick={()=>props.onClose(props.id)}>X</button>)}

            <NavLink className={styles.link} to={`/detail/${props.id}`}> 
               <h2> {props.name}</h2>
            </NavLink>

         <img className={styles.styleImage}
            width={280}
            height={280}
            src={props.image}
            alt="Not found"
         />
         <h2 className={styles.styleCardName}>{props.species}</h2>
         <h2 className={styles.styleCardName}>{props.gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
