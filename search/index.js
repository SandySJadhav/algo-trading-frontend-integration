const { searchInstruments } = require("../services/firestore/search");

module.exports = async (context, req) => {
    if (req.body?.searchTerm) {
        const result = await searchInstruments(req.body);
        context.res = result;
    } else {
        context.res = {
            status: 400,
            statusCode: 400,
            message: "Bad Request!"
        }
    }
};
