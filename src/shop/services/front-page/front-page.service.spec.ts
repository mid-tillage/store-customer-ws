import { Test, TestingModule } from '@nestjs/testing';
import { FrontPageService } from './front-page.service';

describe('FrontPageService', () => {
  let service: FrontPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrontPageService],
    }).compile();

    service = module.get<FrontPageService>(FrontPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
