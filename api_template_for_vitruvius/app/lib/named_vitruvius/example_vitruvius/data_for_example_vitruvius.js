const { BaseDataForNamedVitruvius } = require("@antonpichka/vitruvius");

class DataForExampleVitruvius extends BaseDataForNamedVitruvius {
    constructor() {
        super();
    }

    toString() {
        return "DataForExampleVitruvius(exceptionController: " + this.exceptionController + ")";
    }
}

module.exports = DataForExampleVitruvius;