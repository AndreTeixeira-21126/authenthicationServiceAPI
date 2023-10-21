exports.validateLogin = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        console.log('Missing params')
        return res.status(400).json({ error: 'Missing params' })
    }
    next()
}