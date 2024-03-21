import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VisitasService } from './visitas.service';
import { VisitaSchema, TuristaModel } from './schema/visita.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Visitas', schema: visitaSchema },
    ]),
  ],
  providers: [VisitasService],
  exports: [VisitasService],
})
export class TuristaModule {}