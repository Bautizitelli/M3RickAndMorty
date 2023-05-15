import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actionTypes";

const initialState = { 
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload 
            };

        case REMOVE_FAVORITE :
            return{
                ...state,
                myFavorites:payload
            }
            
            // return {
            //     ...state,
            //     myFavorites: state.myFavorites.filter((e, i)=> i !== payload.id)
                
            // };
            // return { 
            //     ...state, 
            //     myFavorites: payload, 
            //     allCharacters:payload
            // };

            // case REMOVE_WINE_FROM_FAVORITES:
            //     return {
            //       ...state,
            //       favorites: state.favorites.filter((e, i) => i !== action.payload.id),
            //     }

        case FILTER:
            let copy = [...state.allCharacters];
            if (payload === 'All'){
                return {...state, myFavorites: copy}
            }else{
                let filtro = [...state.allCharacters].filter((character)=>{
                    return character.gender === payload
                })  
                return{
                     ...state,
                     myFavorites: filtro
                }
            }

        case ORDER:
            const ordered = [...state.allCharacters]
            const orderedChars = ordered.sort((a,b)=>{
                if(a.id > b.id){
                    return payload === "Ascendente" ? 1 : -1;
                } else if(a.id < b.id){
                    return payload === "Descendente" ? 1 : -1;
                }else{
                    return 0;
                }
            })
            return{
                ...state,
                myFavorites: orderedChars
            };
            case 'RESET':
                return {
                    ...state,
                    myFavorites: state.allCharacters,
                }
        default:
            return {...state}
    }
};

export default reducer;


// const reducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ADD_FAVORITE:
//             return {
//                 ...state, 
//                     myFavorites: [...state.myFavorites, payload] 
//                 };
//         case REMOVE_FAVORITE :
//             let filtered = state.myFavorites.filter((char) => {
//             return char.id !== Number(payload);
//         });
//             return { 
//             ...state,
//             myFavorites: filtered
//         };
//         default:
//             return {...state}
//     }
// };

// export default reducer;

