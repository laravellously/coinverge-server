// News: { CRUD News }
const { News } = require('../../database/models')
module.exports = {
    //# create a news item
    create: async (request, reply) => {
        try {
            return 'Done'
            // const news = request.body;
            // const newItem = await News.create(news);
            // reply.send(newItem.toJSON());
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    // #get the list of news
    fetch: async (request, reply) => {
        // try {
        //     const news = await News.findAll();
        //     reply.send(news);
        // } catch (e) {
        //     reply.code(500).send(e);
        // }
        const news = await News.findAll();
        reply.send(news);
    },

    //#get a single note
    // get: async (request, reply) => {
    //     try {
    //         const noteId = request.params.id;
    //         const note = await Note.findById(noteId);
    //         reply.code(200).send(note);
    //     } catch (e) {
    //         reply.code(500).send(e);
    //     }
    // },

    //#update a note
    // update: async (request, reply) => {
    //     try {
    //         const noteId = request.params.id;
    //         const updates = request.body;
    //         await Note.findByIdAndUpdate(noteId, updates);
    //         const noteToUpdate = await Note.findById(noteId);
    //         reply.code(200).send({ data: noteToUpdate });
    //     } catch (e) {
    //         reply.code(500).send(e);
    //     }
    // },

    //#delete a note
    // delete: async (request, reply) => {
    //     try {
    //         const noteId = request.params.id;
    //         const noteToDelete = await Note.findById(noteId);
    //         await Note.findByIdAndDelete(noteId);
    //         reply.code(200).send({ data: noteToDelete });
    //     } catch (e) {
    //         reply.code(500).send(e);
    //     }
    // },
};