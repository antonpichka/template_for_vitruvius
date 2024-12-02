const { BaseNamedCaseNamedMethodNamedVitruvius } = require("@antonpichka/vitruvius");
const DataForSuccessCaseFirstRequestMethodExampleVitruvius = require("./data_for_success_case_first_request_method_example_vitruvius.js");

class SuccessCaseFirstRequestMethodExampleVitruvius extends BaseNamedCaseNamedMethodNamedVitruvius {
    // NamedUtility

    constructor(req,res) {
        super(new DataForSuccessCaseFirstRequestMethodExampleVitruvius(req,res));
    }

    initBuild() {
        this.dataForNamedCaseNamedMethodNamedVitruvius.success();
        return this;
    }

    disposeBuild() {
        this.dataForNamedCaseNamedMethodNamedVitruvius.req = null;
        this.dataForNamedCaseNamedMethodNamedVitruvius.res = null;
        return this;
    }
}

module.exports = SuccessCaseFirstRequestMethodExampleVitruvius;