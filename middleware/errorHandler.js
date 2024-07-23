const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    //res.status(statusCode);
    switch(statusCode){
        case 404:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
        case 400:
            res.json({
                title: "Bad Request",
                message: err.message,
                stackTrace: err.stack
            });
        case 500:
            res.json({
                title: "Internal Server Error",
                message: err.message,
                stackTrace: err.stack
            });
        case 401:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
        case 403:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
    }
    

};

module.exports = errorHandler;