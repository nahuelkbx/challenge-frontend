
export default ErrorHandler = (err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Ops, something went wrong, try again'

    res.status(errStatus).json({
        success: false,
        status,
        message,

    })
}