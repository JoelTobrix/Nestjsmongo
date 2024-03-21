import { TuristaService } from './turistas.service';
import { TuristaDTO } from './dto/turista.dto';
export declare class TuristaController {
    private turistaService;
    constructor(turistaService: TuristaService);
    insertar(turistaDTO: TuristaDTO): Promise<import("src/turistas/Interfaces/turistas.interfaces").ITurista>;
    todos(): Promise<import("src/turistas/Interfaces/turistas.interfaces").ITurista[]>;
    uno(id: string): Promise<import("src/turistas/Interfaces/turistas.interfaces").ITurista>;
    actualizar(id: string, turistaDTO: TuristaDTO): Promise<import("src/turistas/Interfaces/turistas.interfaces").ITurista>;
    eliminar(id: string): Promise<any>;
}
