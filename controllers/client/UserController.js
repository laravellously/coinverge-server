

/* 
 *  Methods =>
 *  Auth: { postLogin, postRegister, getProfile, postEditProfile, postChangePassword, postForgotPassword, postResetPassword, postActivate, postVerify }
 *  User: { getBalance, getOpenOrders, getCompleteOrders, getTradeHistory }
 *  Chat: { streamChats, postChat }
 */

const { User } = require('../../database/models')

module.exports = {

    // login a user
    login: async (request, reply) => {
        try {
            // const data = request.body;
            // const newItem = await News.create(news);
            // reply.send(newItem.toJSON());
            reply.send(true);
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    // register a new user
    register: async (request, reply) => {
        // try {
        //     const news = await News.findAll();
        //     reply.send(news);
        // } catch (e) {
        //     reply.code(500).send(e);
        // }
        const user = await User.create();
        reply.send(user);
    },

    logout: async (request, reply) => {
        // Invalidate the session
        return 'done';
    },

    // get the profile
    profile: async (request, reply) => {
        return { user: {name: 'Test User'}}
    }
};