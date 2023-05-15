import axios from 'axios'
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actionTypes"


export function addFav(character){
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character)
         if(!data.length) throw Error('No hay favoritos')
         return dispatch({
            type: ADD_FAVORITE,
            payload: data,
         });
      } catch(error) {
         console.log(error.message);
      }  
    };
 };
// export function addFav(character){
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     console.log("entro en agregar");
//     return (dispatch) => {
//        axios.post(endpoint, character)
//        .then(({ data }) => {
//           return dispatch({
//              type: ADD_FAVORITE,
//              payload: data,
//           });
//        });
//     };
//  };


export const removeFav = (id) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
         try{
            const {data}= await axios.delete(endpoint)
            if(!data.length) throw Error('No hay favoritos')
             return dispatch({
                type: REMOVE_FAVORITE,
                payload: data,
            });
         }
         catch(error){
            console.log(error.message);
          }
      };
   };
// export const removeFav = (id) => {
//          const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//          console.log("entro en eliminar");
//         return (dispatch) => {
//          try{
//             axios.delete(endpoint)
//             .then(({ data }) => {
//              return dispatch({
//                 type: REMOVE_FAVORITE,
//                 payload: data,
//             });
//           })
//          }
//          catch(error){
//             console.log('Error removing favorite:', error);
//           }
//       };
//    };


export const filterCard = (gender)=>{
    return{
        type: FILTER,
        payload:gender
    }
}

export const orderCards = (id)=>{
    return{
        type: ORDER,
        payload:id
    }
}