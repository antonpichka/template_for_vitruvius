const { LocalException, EnumGuilty } = require("@antonpichka/vitruvius");
const ExampleWrapperRepository = require("../model_wrapper_repository/example_wrapper_repository/example_wrapper_repository.js");

class FactoryModelWrapperRepositoryUtility {
    constructor() {
        if (new.target === FactoryModelWrapperRepositoryUtility) {
            throw new LocalException("FactoryModelWrapperRepositoryUtility",EnumGuilty.developer,"FactoryModelWrapperRepositoryUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get getExampleWrapperRepository() {
        return new ExampleWrapperRepository();
    }
}

module.exports = FactoryModelWrapperRepositoryUtility;