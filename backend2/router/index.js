const router = require('express').Router()
const Controller = require('../controller')

router.get('/', Controller.getUser)
router.post('/register', Controller.register)
router.put('/:id', Controller.editUser)
router.delete('/:id', Controller.deleteUser)
router.post('/login', Controller.login)
router.post('/loginOtp', Controller.loginOtp)

module.exports = router
