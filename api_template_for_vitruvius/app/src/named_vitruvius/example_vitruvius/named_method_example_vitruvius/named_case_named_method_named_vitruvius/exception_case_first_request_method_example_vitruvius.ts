import { Request, Response } from "express";
import { BaseNamedCaseNamedMethodNamedVitruvius, ExceptionController } from "@antonpichka/vitruvius";
import DataForExceptionCaseFirstRequestMethodExampleVitruvius from "./data_for_exception_case_first_request_method_example_vitruvius";

class ExceptionCaseFirstRequestMethodExampleVitruvius extends BaseNamedCaseNamedMethodNamedVitruvius<DataForExceptionCaseFirstRequestMethodExampleVitruvius> {
    // NamedUtility

    public constructor(exceptionController: ExceptionController, req: Request, res: Response) {
        super(new DataForExceptionCaseFirstRequestMethodExampleVitruvius(exceptionController,req,res));
    }

    public override initBuild(): BaseNamedCaseNamedMethodNamedVitruvius<DataForExceptionCaseFirstRequestMethodExampleVitruvius> {
        this.dataForNamedCaseNamedMethodNamedVitruvius.gatewayTimeoutParametersExceptionControllerAndRes();
        return this;
    }

    public override disposeBuild(): BaseNamedCaseNamedMethodNamedVitruvius<DataForExceptionCaseFirstRequestMethodExampleVitruvius> {
        this.dataForNamedCaseNamedMethodNamedVitruvius.req = null;
        this.dataForNamedCaseNamedMethodNamedVitruvius.res = null;
        return this;
    }
}

export default ExceptionCaseFirstRequestMethodExampleVitruvius;