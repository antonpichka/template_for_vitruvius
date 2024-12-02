const { BaseDataForNamedCaseNamedMethodNamedVitruvius } = require("@antonpichka/vitruvius");

class DataForExceptionCaseFirstRequestMethodExampleVitruvius extends BaseDataForNamedCaseNamedMethodNamedVitruvius {
    req;
    res;
    #exceptionController;

    constructor(req,res,exceptionController) {
        super();
        this.req = req;
        this.res = res;
        this.#exceptionController = exceptionController;
    }

    toString() {
        return "DataForExceptionCaseFirstRequestMethodExampleVitruvius(req: " + this.req + ", res: " + this.res + ", exceptionController: " + this.exceptionController + ")";
    }

    get exceptionController() {
        return this.#exceptionController;
    }

    gatewayTimeout() {
        this.res.status(504).json({
            timestamp : new Date().toLocaleString(),
            message : "Exception: " + this.exceptionController.getKeyParameterException
        });
    }
}

module.exports = DataForExceptionCaseFirstRequestMethodExampleVitruvius;