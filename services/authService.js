const users = []
const crypto = require('crypto')
const bcrypt = require('bcrypt');
class AuthService {
    constructor(repository) {
        this.repository = repository
    }
    async register(data) {
        try {
            const id = crypto.randomUUID()
            const salt = bcrypt.genSaltSync(10)
            data.password = bcrypt.hashSync(data.password, salt)
            await this.repository.add({ id, email: data.email, password: data.password })
            return { success: true, data: { id, email: data.email, password: data.password } }
            }
            catch(error) {
                console.log(error)
                return { success: false, error: {type: "server", message: error.message || 'Internal server error'}}
        }
    }
    async login(data) {
        try {
            const user = await this.repository.findByEmail(data.email)
            if(!user) {
                return { success: false, error: {type: "client", message: 'Invalid credentials'}}
            }
            const isPasswordValid = bcrypt.compareSync(data.password, user.password)
            if(!isPasswordValid) {
                return { success: false, error: {type: "client", message: 'Invalid credentials'}}
            }
            return { success: true, data: user }
        }
        catch(error) {
            console.log(error)
            return { success: false, error: {type: "server", message: error.message || 'Internal server error'}}
        }
    }
}

module.exports = AuthService