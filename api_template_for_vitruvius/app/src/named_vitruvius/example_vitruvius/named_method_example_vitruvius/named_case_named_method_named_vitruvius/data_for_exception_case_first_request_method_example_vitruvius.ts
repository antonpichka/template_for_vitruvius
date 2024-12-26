import { Request, Response } from "express";
import { BaseDataForNamedCaseNamedMethodNamedVitruvius, ExceptionController } from "@antonpichka/vitruvius";

class DataForExceptionCaseFirstRequestMethodExampleVitruvius extends BaseDataForNamedCaseNamedMethodNamedVitruvius {
    public readonly exceptionController: ExceptionController;
    public req: Request | null;
    public res: Response | null;

    public constructor(exceptionController: ExceptionController, req: Request, res: Response) {
        super();
        this.exceptionController = exceptionController;
        this.req = req;
        this.res = res;
    }

    public override toString(): string {
        return "DataForExceptionCaseFirstRequestMethodExampleVitruvius(exceptionController: " + this.exceptionController + ", req: " + this.req + ", res: " + this.res + ")";
    }

    public gatewayTimeout(): void {
        this.res?.status(504).json({
            timestamp : new Date().toLocaleString(),
            message : "Exception: " + this.exceptionController.getKeyParameterException
        });
    }
}

export default DataForExceptionCaseFirstRequestMethodExampleVitruvius;