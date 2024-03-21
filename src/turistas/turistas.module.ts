import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TuristaService } from './turistas.service';
import { TuristaSchema, TuristaModel } from './schema/turista.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Turista', schema: TuristaSchema },
    ]),
  ],
  providers: [TuristaService],
  exports: [TuristaService],
})
export class TuristaModule {}
