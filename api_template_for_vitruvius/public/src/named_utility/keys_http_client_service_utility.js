const { LocalException, EnumGuilty } = require("@antonpichka/vitruvius");

class KeysHttpClientServiceUtility {
    /* Qw */
    static #qwQQId = "id";

    constructor() {
        if (new.target === KeysHttpClientServiceUtility) {
            throw new LocalException("KeysHttpClientServiceUtility",EnumGuilty.developer,"KeysHttpClientServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get qwQQId() {
        return this.#qwQQId;
    }
}

module.exports = KeysHttpClientServiceUtility;