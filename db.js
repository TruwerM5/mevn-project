const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ilsur20002016:overkings10@cluster0.idjptvq.mongodb.net/BookShop?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', err => {
    console.log('MongoDB error: ', err.message);
    process.exit(1);
});

db.once('open', () => console.log('MongoDB connection established'));

const Vacation = require('./models/vacation');
const User = require('./models/user');
module.exports = {
    getVacations: async (options = {}) => Vacation.find(options),

    signUp: async ({ login, pass, firstname, secondname }) => {
        const user = await User.findOne({ login,firstname, secondname }).exec();
        if(!user) {
           
            console.log('SIGNED UP SUCCESS');
            await new User({ login, pass, firstname, secondname }).save();
           return true;
        } else {
            return { err: 'User already exists!' };
        }
    },
    auth: async ({ login }) => {
        const authUser = await User.findOne({ login }, 'login firstname secondname').exec();
        console.log('From DB Auth: ', authUser);
        return authUser ? authUser : false;
    },
    login: async ({login, pass}) => {
        const userQuery = await User.findOne({ login });
        if(userQuery) {
            if(userQuery.pass == pass) {
                const user = { 
                    login: userQuery.login,
                    firstname: userQuery.firstname,
                    secondname: userQuery.secondname
                }

                return true;
            } else return { err: 'Invalid password!' }
        } else return {err: 'User does not exist!'}
    },
    getUsers: async (options = {}) => await User.find({}, 'firstname secondname login').exec(),
    deleteUser: async (id) => await User.findByIdAndDelete(id)
}

