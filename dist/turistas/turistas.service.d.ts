import { Model } from 'mongoose';
import { TuristaDTO } from './dto/turista.dto';
import { ITurista } from './Interfaces/turistas.interfaces';
export declare class TuristaService {
    private readonly turistaModel;
    constructor(turistaModel: Model<ITurista>);
    todos(): Promise<ITurista[]>;
    uno(id: string): Promise<ITurista>;
    insertar(turistaDTO: TuristaDTO): Promise<ITurista>;
    actualizar(id: string, turistaActualizar: TuristaDTO): Promise<ITurista>;
    eliminar(id: string): Promise<any>;
}
