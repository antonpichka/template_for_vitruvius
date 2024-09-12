const { ExceptionController, BaseNamedVitruvius } = require("@antonpichka/vitruvius");
const DataForExampleVitruvius = require("./data_for_example_vitruvius.js");
const FirstRequestMethodExampleVitruvius = require("./named_method_example_vitruvius/first_request_method_example_vitruvius.js");

class ExampleVitruvius extends BaseNamedVitruvius {
    // ModelWrapperRepository
    // NamedUtility

    constructor() {
        super(new DataForExampleVitruvius());
    }

    async firstRequest() {
        return new FirstRequestMethodExampleVitruvius(ExceptionController.success());
    }

    dispose() {
    }
}

module.exports = ExampleVitruvius;