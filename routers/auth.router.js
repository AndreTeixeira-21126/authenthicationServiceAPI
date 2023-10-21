const Router = require('express').Router

const { validate } = require('../middlewares/registerBodyValidation.midddleware');
const AuthService = require('../services/authService');
const UserArrayRepository = require('../repositories/arrayUser.repository');
const AuthController = require('../controllers/authController');

const authController = new AuthController(new AuthService(new UserArrayRepository()))

class AuthRouter {
    constructor(authController) {
        this.authController = authController
        
    }
    buildRouter() {
        const router = Router()
        router.post("/register", validate, authController.register())
        return router
    }
}
module.exports = new AuthRouter(authController)