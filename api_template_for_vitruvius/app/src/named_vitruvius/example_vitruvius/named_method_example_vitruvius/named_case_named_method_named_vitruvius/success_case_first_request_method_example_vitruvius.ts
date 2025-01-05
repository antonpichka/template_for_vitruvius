import { Request, Response } from "express";
import { BaseNamedCaseNamedMethodNamedVitruvius } from "@antonpichka/vitruvius";
import DataForSuccessCaseFirstRequestMethodExampleVitruvius from "./data_for_success_case_first_request_method_example_vitruvius";

class SuccessCaseFirstRequestMethodExampleVitruvius extends BaseNamedCaseNamedMethodNamedVitruvius<DataForSuccessCaseFirstRequestMethodExampleVitruvius> {
    // NamedUtility

    public constructor(req: Request, res: Response) {
        super(new DataForSuccessCaseFirstRequestMethodExampleVitruvius(req,res));
    }

    public override initBuild(): BaseNamedCaseNamedMethodNamedVitruvius<DataForSuccessCaseFirstRequestMethodExampleVitruvius> {
        this.dataForNamedCaseNamedMethodNamedVitruvius.successParameterRes();
        return this;
    }

    public override disposeBuild(): BaseNamedCaseNamedMethodNamedVitruvius<DataForSuccessCaseFirstRequestMethodExampleVitruvius> {
        this.dataForNamedCaseNamedMethodNamedVitruvius.req = null;
        this.dataForNamedCaseNamedMethodNamedVitruvius.res = null;
        return this;
    }
}

export default SuccessCaseFirstRequestMethodExampleVitruvius;