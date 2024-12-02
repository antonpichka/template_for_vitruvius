const { LocalException, EnumGuilty } = require("@antonpichka/vitruvius");

class AlgorithmsUtility {
    constructor() {
        if (new.target === AlgorithmsUtility) {
            throw new LocalException("AlgorithmsUtility",EnumGuilty.developer,"AlgorithmsUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
}

module.exports = AlgorithmsUtility;