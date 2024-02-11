const { fetchAllStrategies } = require("../services/firestore/strategies");
const { validateStrategiesPayload } = require("../services/strategies/helper");

module.exports = async (context, req) => {
    const { isGetAllStrategies } = validateStrategiesPayload(req);
    if (isGetAllStrategies) {
        const allAssignedStrategies = await fetchAllStrategies(req.query);
        context.res = allAssignedStrategies;
    }
};
