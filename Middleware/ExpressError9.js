class ExpressError extends Error {       // ExpressError is our custom class which extend express error class
    constructor(status,message) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;