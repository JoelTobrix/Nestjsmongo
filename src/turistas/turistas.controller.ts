import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TuristaService } from './turistas.service';
import { TuristaDTO } from './dto/turista.dto';

@Controller('api/v2/turista')
export class TuristaController {
  constructor(private turistaService: TuristaService) {}

  @Post()
  insertar(@Body() turistaDTO: TuristaDTO) {
    return this.turistaService.insertar(turistaDTO);
  }

  @Get()
  todos() {
    return this.turistaService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.turistaService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() turistaDTO: TuristaDTO) {
    return this.turistaService.actualizar(id, turistaDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.turistaService.eliminar(id);
  }
}
