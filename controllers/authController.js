class AuthController {
    constructor(authService) {
        this.authService = authService
    }
    register() {
        return async(req, res) => {
            const { success, data, error } = await this.authService.register(req.body)
                if(success) {
                    return res.status(201).json(data)
                }
                if(error.type === 'client') {
                    return res.status(400).json({ error})
                }
                return res.status(500).json({ error})
        }
    }
    login() {
        return async(req, res) => {
            const { success, data, error } = await this.authService.login(req.body)
                if(success) {
                    return res.status(200).json(data)
                }
                if(error.type === 'client') {
                    return res.status(400).json({ error})
                }
                return res.status(500).json({ error})
        }
    }
}
module.exports = AuthController