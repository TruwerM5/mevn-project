const db = require('../db');

const { generateAccessToken, authToken } = require('./tokens');


exports.getVacationsApi = async (req, res) => {
    const vacations = await db.getVacations({ available: true });
    res.json(vacations);
}

exports.signup = async (req, res) => {
    const { firstname, secondname, login, pass } = req.body;
    const signUpUser = await db.signUp({ firstname, secondname, login, pass });
    const token = generateAccessToken({ firstname, secondname, login });
    if(signUpUser == true) {
        res.json({ token });
    } else {
        res.json({err: signUpUser.err})
    }
    
}

exports.auth = async (req, res) => {
    const token = req.headers['authorization'];    
    if(token) {
        const verify = authToken(token);
        console.log('verified', verify);
        const authUser = await db.auth(verify);
        return res.json({user: authUser});
    } else {
        return res.json({err: 'Unauthorized'})
    }
    res.end();
}

exports.login = async (req, res) => {
    
    
    const { login, pass } = req.body;
    loginUser = await db.login({ login, pass });
    
    if(loginUser == true) {
        const token = generateAccessToken({ login, pass });
       return res.json({ token });
    } 
    return res.json({ err: loginUser.err });
}

exports.getUsersApi = async (req, res) => {
    const users = await db.getUsers();
    res.json(users);
}

exports.deleteUserApi = async (req, res) => {
    await db.deleteUser(req.body.id);
    res.end();
}