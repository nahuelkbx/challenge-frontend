
const ErrorHandler = (err, _req, res, _next) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Ops, something went wrong, try again'

    res.status(status).json({
        success: false,
        status,
        message,
    })
}

module.exports = ErrorHandler