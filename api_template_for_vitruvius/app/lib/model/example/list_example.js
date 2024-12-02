const { BaseListModel } = require("@antonpichka/vitruvius");

class ListExample extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    clone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.clone());
        }
        return new ListExample(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel + ",\n";
        }
        return "ListExample(listModel: [" + strListModel + "])";
    }
}

module.exports = ListExample;