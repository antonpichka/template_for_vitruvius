const { BaseNamedCaseNamedMethodNamedVitruvius } = require("@antonpichka/vitruvius");
const DataForExceptionCaseFirstRequestMethodExampleVitruvius = require("./data_for_exception_case_first_request_method_example_vitruvius.js");

class ExceptionCaseFirstRequestMethodExampleVitruvius extends BaseNamedCaseNamedMethodNamedVitruvius {
    // NamedUtility

    constructor(req,res,exceptionController) {
        super(new DataForExceptionCaseFirstRequestMethodExampleVitruvius(req,res,exceptionController));
    }

    initBuild() {
        this.dataForNamedCaseNamedMethodNamedVitruvius.gatewayTimeout();
        return this;
    }

    disposeBuild() {
        this.dataForNamedCaseNamedMethodNamedVitruvius.req = null;
        this.dataForNamedCaseNamedMethodNamedVitruvius.res = null;
        return this;
    }
}

module.exports = ExceptionCaseFirstRequestMethodExampleVitruvius;