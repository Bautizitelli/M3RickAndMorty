import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.cardsStyle}>
           { 
            characters.map(({name, species, gender, image, id})=>{
               return <Card
                  name={name}
                  species={species}
                  gender={gender}
                  image ={image}
                  id={id}
                  onClose={props.onClose}
               />
            })
           }
         </div>
   )
}
