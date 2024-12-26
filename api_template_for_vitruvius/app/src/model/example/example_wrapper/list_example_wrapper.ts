import { BaseListModelWrapper } from "@antonpichka/vitruvius";
import Example from "../example";
import ListExample from "../list_example";

class ListExampleWrapper extends BaseListModelWrapper {
    public constructor(listsListObject: Array<Array<any>>) {
        super(listsListObject);
    }
    
    public override createListModel(): ListExample<Example> {
        const listModel = new Array();
        for(const itemListObject of this.listsListObject) {
            listModel.push(new Example(itemListObject[0]));
        }
        return new ListExample(listModel);
    }
}

export default ListExampleWrapper;