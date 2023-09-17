import { Test, TestingModule } from '@nestjs/testing';
import { FrontPageController } from './front-page.controller';

describe('FrontPageController', () => {
  let controller: FrontPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrontPageController],
    }).compile();

    controller = module.get<FrontPageController>(FrontPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
