function sendOkResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.quote || res.locals.quotes
  })
}

function sendErrorResponse(err, req, res, next) {
  res.json({
    status: 'Error',
    message: err.message
  })
}

module.exports = {
  sendOkResponse,
  sendErrorResponse
}
