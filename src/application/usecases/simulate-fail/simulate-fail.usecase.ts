import { SimulateFailInput } from "./simulate-fail.input";
import { SimulateFailOutput } from "./simulate-fail.output";

export class SimulateFailUseCase {

    handle(input:SimulateFailInput): SimulateFailOutput{

        if(Math.random() <= input.failureRate){

          throw new Error("FAIL");

        }

        return {
            success: true,
            data: "Success!"
        }
    }

}