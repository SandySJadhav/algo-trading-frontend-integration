const validateStrategiesPayload = (req) => {
  const isGetAllStrategies = req.method === "GET" && req.query.type === 'ALL';

  return {
    isGetAllStrategies
  }
}

module.exports = {
  validateStrategiesPayload
}