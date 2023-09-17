import { Test, TestingModule } from '@nestjs/testing';
import { ProductListInfoController } from './product-list-info.controller';

describe('ProductListInfoController', () => {
  let controller: ProductListInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductListInfoController],
    }).compile();

    controller = module.get<ProductListInfoController>(ProductListInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
