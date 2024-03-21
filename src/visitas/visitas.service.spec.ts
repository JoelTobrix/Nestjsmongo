import { Test, TestingModule } from '@nestjs/testing';
import { TuristaService } from './visitas.service';

describe('VisitasService', () => {
  let service: VisitasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitasService],
    }).compile();

    service = module.get<TuristaService>(TuristaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});