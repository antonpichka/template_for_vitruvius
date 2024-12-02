const { BaseNamedMethodNamedVitruvius } = require("@antonpichka/vitruvius");
const EnumFirstRequestMethodExampleVitruvius = require("./enum_first_request_method_example_vitruvius.js"); 

class FirstRequestMethodExampleVitruvius extends BaseNamedMethodNamedVitruvius {
    constructor(exceptionController) {
        super(exceptionController);
    }

    get getEnumNamedMethodNamedVitruvius() {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumFirstRequestMethodExampleVitruvius.exception;
        }
        return EnumFirstRequestMethodExampleVitruvius.success;
    }

    toString() {
        return "FirstRequestMethodExampleVitruvius(exceptionController: " + this.exceptionController + ")";
    }
}

module.exports = FirstRequestMethodExampleVitruvius;