const { BaseModel }  = require("@antonpichka/vitruvius");

class Example extends BaseModel {
    constructor(uniqueId) {
        super(uniqueId);
    }

    clone() {
        return new Example(this.uniqueId);
    }

    toString() {
        return "Example(uniqueId: " + this.uniqueId + ")";
    }
}

module.exports = Example;