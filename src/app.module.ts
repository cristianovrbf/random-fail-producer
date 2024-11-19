import { Module } from '@nestjs/common';
import { FailSimulatorV1Controller } from './presentation/controllers/v1/fail-simulator.controller';
import { SimulateFailUseCase } from './application/usecases/simulate-fail';

@Module({
  imports: [],
  controllers: [FailSimulatorV1Controller],
  providers: [
    {
      provide: SimulateFailUseCase,
      useFactory: () => {
        return new SimulateFailUseCase();
      }
    }
  ],
})
export class AppModule {}
