export const errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal server error';

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
}
