import { Request, Response } from "express";
import { BaseDataForNamedCaseNamedMethodNamedVitruvius } from "@antonpichka/vitruvius";

class DataForSuccessCaseFirstRequestMethodExampleVitruvius extends BaseDataForNamedCaseNamedMethodNamedVitruvius {
    public req: Request | null;
    public res: Response | null;

    public constructor(req: Request,res: Response) {
        super();
        this.req = req;
        this.res = res;
    }

    public override toString(): string {
        return "DataForSuccessCaseFirstRequestMethodExampleVitruvius(req: " + this.req + ", res: " + this.res + ")";
    }
    
    public success(): void {
        this.res?.status(200).json({
            timestamp : new Date().toLocaleString(),
            message : "Success"
        });
    }
}

export default DataForSuccessCaseFirstRequestMethodExampleVitruvius;