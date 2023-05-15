
let myFavorites = []

function postFav(req,res){
    const char = req.body
    myFavorites.push(char)
    res.status(200).json(myFavorites)
}

function deleteFav(req,res){
    console.log(req.params);
    const {id} = req.params
    myFavorites = myFavorites.filter((character)=> +character.id !== +id)
    res.status(200).json(myFavorites)
}

// const deleteFav = (req, res) => {
//     myFavorites = myFavorites.filter(fav => +req.params.id !== fav.id)
//     res.status(200).json(myFavorites)
// }

module.exports ={
    postFav,
    deleteFav,
}