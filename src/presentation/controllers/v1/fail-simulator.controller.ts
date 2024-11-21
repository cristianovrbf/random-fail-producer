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
            failureRate: 0.75
        };

        return this.simulateFailUseCase.handle(input);
    }
}