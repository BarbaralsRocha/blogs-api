const errorHandler = (err, _req, res, _next) => {
console.log('erro', err);
    return res.status(err.status || 500).json({ message: err.message || 'Erro inesperado' }); 
};

module.exports = errorHandler;