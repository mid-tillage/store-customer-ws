import { Test, TestingModule } from '@nestjs/testing';
import { PaymentInfoController } from './payment-info.controller';

describe('PaymentInfoController', () => {
  let controller: PaymentInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentInfoController],
    }).compile();

    controller = module.get<PaymentInfoController>(PaymentInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
