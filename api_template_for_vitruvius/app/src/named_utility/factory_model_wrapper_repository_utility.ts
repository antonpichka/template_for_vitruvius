import ExampleWrapper from "../model/example/example_wrapper/example_wrapper";
import ListExampleWrapper from "../model/example/example_wrapper/list_example_wrapper";
import ExampleWrapperRepository from "../model_wrapper_repository/example_wrapper_repository/example_wrapper_repository";

class FactoryModelWrapperRepositoryUtility {
    private constructor() {
    }

    public static get getExampleWrapperRepository(): ExampleWrapperRepository<ExampleWrapper,ListExampleWrapper> {
        return new ExampleWrapperRepository();
    }
}

export default FactoryModelWrapperRepositoryUtility;