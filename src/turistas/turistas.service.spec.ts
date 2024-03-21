import { Test, TestingModule } from '@nestjs/testing';
import { TuristaService } from './turistas.service';

describe('TuristasService', () => {
  let service: TuristaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuristaService],
    }).compile();

    service = module.get<TuristaService>(TuristaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
