const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    // Extracts the token from the Authorization header of the request
    if (!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
// Uses the jsonwebtoken library to check if the token is valid by comparing it with a secret key (JWT_SECRET)
// If valid it decodes the token and assigns it to verified
        req.user = verified;
// adds the decoded token information to the req object so it can be used later in the request handling process
        next();
// Passes control to the next middleware function or route handler
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

module.exports = authenticateToken;