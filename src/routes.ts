import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'
import { episodesController } from './controllers/episodesController'
import { favoriteController } from './controllers/favoritesController'
import { authController } from './controllers/authController'
import { ensureAuth, ensureAuthViaQuery } from './middlewares/auth'
import { likesController } from './controllers/likesController'
import { userController } from './controllers/usersController'
const router = express.Router()


router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/categories',ensureAuth, categoriesController.index)
router.get('/categories/:id',ensureAuth, categoriesController.show)

router.get('/courses/featured',ensureAuth, coursesController.featured)
router.get('/courses/popular', ensureAuth, coursesController.popular)
router.get('/courses/newest',ensureAuth, coursesController.newest)
router.get('/courses/search',ensureAuth, coursesController.search)
router.get('/courses/:id',ensureAuth, coursesController.show)

router.get('/episodes/stream',ensureAuthViaQuery, episodesController.stream)
router.get('/episodes/:id/watchTime', ensureAuth, episodesController.getWatchTime)
router.post('/episodes/:id/watchTime', ensureAuth, episodesController.setWatchTime)


router.get('/favorites', ensureAuth, favoriteController.index)
router.post('/favorites', ensureAuth, favoriteController.save)
router.delete('/favorites/:id', ensureAuth, favoriteController.delete)

router.post('/likes', ensureAuth, likesController.save)
router.delete('/likes/:id', ensureAuth, likesController.delete)

router.get('/users/current', ensureAuth, userController.show)
router.put('/users/current', ensureAuth, userController.update)
router.put('/users/current/password', ensureAuth, userController.updatePassword)
router.get('/users/current/watching', ensureAuth, userController.watching)



export {router}