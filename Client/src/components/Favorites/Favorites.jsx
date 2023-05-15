import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css"
import { filterCard, orderCards } from "../../redux/actions";

const Favorites = (props) => {
    const { myFavorites } = props;

    const dispatch = useDispatch()

    const order=(event)=>{
        dispatch(orderCards(event.target.value))
    }             
    const filter=(event)=>{
        dispatch(filterCard(event.target.value))
    }
    
    
    return(
        <div>
            <div className={styles.filters}>
                <select name="" onChange={order} className={styles.selector}>
                    <option className={styles.selectorOptions} selected disabled>ID </option>
                    <option className={styles.selectorOptions} value='Ascendente'>Ascendente</option>
                    <option className={styles.selectorOptions} value="Descendente">Descendente</option>           
                </select>

                <select name="" onChange={filter} className={styles.selector}>
                    <option className={styles.selectorOptions} selected disabled>Género</option>
                    <option className={styles.selectorOptions} value="All">All</option>
                    <option className={styles.selectorOptions} value="Male">Male</option>
                    <option className={styles.selectorOptions} value="Female">Female</option>
                    <option className={styles.selectorOptions} value="Genderless">Genderless</option>
                    <option className={styles.selectorOptions} value="unknown">Unknown</option>
                </select>
                {/* <button value="reset" onClick={handleReset}>Limpiar filtros</button> */}
            </div>
        <div className={styles.favoritesGrid}>
            {myFavorites.length && myFavorites.map((character) => {
                return <Card
                id={character.id}
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                />
            })}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}



export default connect(mapStateToProps, null)(Favorites);