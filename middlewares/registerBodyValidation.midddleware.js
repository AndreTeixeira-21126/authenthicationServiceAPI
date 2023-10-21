exports.validate = (req, res, next) => {
   
    if (!req.body.email || !req.body.password || !req.body.confirmPassword) {
        console.log('Missing params')
        return res.status(400).json({ error: 'Missing params' })
    }
    if (req.body.password !== req.body.confirmPassword) {
        console.log('Passwords does not match')
        return res.status(400).json({ error: 'Passwords does not match' })
    }
    if (req.body.password.length < 6) {
        console.log('Password must have at least 6 characters')
        return res.status(400).json({ error: 'Password must have at least 6 characters' })
    
    }

    next()
}