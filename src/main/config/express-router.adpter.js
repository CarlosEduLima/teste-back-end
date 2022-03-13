//adpter que utiliza as funcionalidades do express
module.exports = function ExpressRouterAdapter(router) {
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers,
      query: req.query,
    }
    const httpResponse = await router.route(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
