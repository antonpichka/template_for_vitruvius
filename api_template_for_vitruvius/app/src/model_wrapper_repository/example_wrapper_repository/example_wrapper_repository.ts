import { BaseModelWrapperRepository, EnumGuilty, LocalException, Result, ResultWithModelWrapper, ResultWithListModelsWrapper, BaseModelWrapper } from "@antonpichka/vitruvius";
import ExampleWrapper from "../../model/example/example_wrapper/example_wrapper";
import ListExampleWrapper from "../../model/example/example_wrapper/list_example_wrapper";

class ExampleWrapperRepository<T extends ExampleWrapper, Y extends ListExampleWrapper> extends BaseModelWrapperRepository {
    public constructor() {
        super();
    }

    public override dispose(): void {
    }
    
    public async getExampleParameterUnknown(): Promise<ResultWithModelWrapper<T>> {
        throw Error();
    }
}

export default ExampleWrapperRepository;