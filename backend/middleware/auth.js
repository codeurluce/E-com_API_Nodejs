const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            throw 'Authorization header missing!';
        }
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = { userId };
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized request', error });
    }
};