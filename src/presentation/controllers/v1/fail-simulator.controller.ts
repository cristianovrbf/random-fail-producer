import { Controller, Get } from "@nestjs/common";
import { SimulateFailUseCase } from "@/application/usecases/simulate-fail";

@Controller()
export class FailSimulatorV1Controller{

    constructor(
        private readonly simulateFailUseCase:SimulateFailUseCase
    ){}

    @Get()
    getPossibleFail(){

        const input = {
            userId: "eca81b3e-26ff-4128-9a64-fb72ec8f8abe",
            timestamp: new Date()
        };

        return this.simulateFailUseCase.handle(input);
    }
}