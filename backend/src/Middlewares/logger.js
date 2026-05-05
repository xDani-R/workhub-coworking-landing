const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // 👈 imprescindible para que continúe al controller
};

module.exports = logger;