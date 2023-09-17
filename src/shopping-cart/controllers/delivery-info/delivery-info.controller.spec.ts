import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryInfoController } from './delivery-info.controller';

describe('DeliveryInfoController', () => {
  let controller: DeliveryInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryInfoController],
    }).compile();

    controller = module.get<DeliveryInfoController>(DeliveryInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
