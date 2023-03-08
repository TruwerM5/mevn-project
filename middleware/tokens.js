const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
function generateAccessToken(username) {
    return jwt.sign(username, jwtSecret);
}


function authToken(token) {
    return jwt.verify(token, jwtSecret);
}


module.exports = {generateAccessToken, authToken}   