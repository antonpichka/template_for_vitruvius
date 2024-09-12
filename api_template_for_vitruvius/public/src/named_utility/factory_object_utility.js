const { LocalException, EnumGuilty } = require("@antonpichka/vitruvius");
const ExampleWrapperRepository = require("../model_wrapper_repository/example_wrapper_repository/example_wrapper_repository.js");

class FactoryObjectUtility {
    constructor() {
        if (new.target === FactoryObjectUtility) {
            throw new LocalException("FactoryObjectUtility",EnumGuilty.developer,"FactoryObjectUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    /* ModelWrapperRepository */
    static get getExampleWrapperRepository() {
        return new ExampleWrapperRepository();
    }
}

module.exports = FactoryObjectUtility;