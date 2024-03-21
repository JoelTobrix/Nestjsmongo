import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitasController } from './visitas/visitas.controller';

@Module({
  imports: [],
  controllers: [AppController, VisitasController],
  providers: [AppService],
})
export class AppModule {}
