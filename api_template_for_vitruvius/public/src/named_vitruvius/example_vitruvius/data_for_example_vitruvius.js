const { BaseDataForNamed } = require("@antonpichka/vitruvius");

class DataForExampleVitruvius extends BaseDataForNamed {
    constructor() {
        super();
    }

    toString() {
        return "DataForExampleVitruvius(exceptionController: " + this.exceptionController + ")";
    }
}

module.exports = DataForExampleVitruvius;