const { BaseDataForNamedCaseNamedMethodNamedVitruvius } = require("@antonpichka/vitruvius");

class DataForSuccessCaseFirstRequestMethodExampleVitruvius extends BaseDataForNamedCaseNamedMethodNamedVitruvius {
    req;
    res;

    constructor(req,res) {
        super();
        this.req = req;
        this.res = res;
    }

    toString() {
        return "DataForSuccessCaseFirstRequestMethodExampleVitruvius(req: " + this.req + ", res: " + this.res + ")";
    }

    success() {
        this.res.status(200).json({
            timestamp : new Date().toLocaleString(),
            message : "Success"
        });
    }
}

module.exports = DataForSuccessCaseFirstRequestMethodExampleVitruvius;