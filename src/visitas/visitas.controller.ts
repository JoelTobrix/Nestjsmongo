import { Controller,Post, Get, Param, Put, Delete, Body } from '@nestjs/common';

@Controller('api/v2/visita')
export class VisitasController {

    constructor(private visitaService: visitaService) {}

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
  actualizar(@Param('ID_Visita') id: string, @Body() turistaDTO: TuristaDTO) {
    return this.turistaService.actualizar(id, turistaDTO);
  }

  @Delete(':id')
  eliminar(@Param('ID_Visita') id: string) {
    return this.turistaService.eliminar(id);
  }
}
}

