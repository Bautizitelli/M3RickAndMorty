// const { postFav, deleteFav } = require('../controllers/handleFavorites')
const { login } = require('../controllers/login')
const getCharById = require('../controllers/getCharById')
const{ postUser }= require('../controllers/postUser')
const{ postFavs }= require('../controllers/postFavs')
const { deleteFav } = require('../controllers/deleteFav')


const router = require ('express').Router()

router.get('/login',login)
router.post('/login',postUser)

router.get('/character/:id',getCharById)

router.post('/fav',postFavs)

router.delete('/fav/:id',deleteFav)

module.exports = router
