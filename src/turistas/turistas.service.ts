import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TuristaDTO } from './dto/turista.dto';
import { ITurista } from './Interfaces/turistas.interfaces';

@Injectable()
export class TuristaService {
  constructor(
    @InjectModel('Turista') private readonly turistaModel: Model<ITurista>
  ) {}

  async todos(): Promise<ITurista[]> {
    return await this.turistaModel.find().exec();
  }

  async uno(id: string): Promise<ITurista> {
    return await this.turistaModel.findById(id).exec();
  }

  async insertar(turistaDTO: TuristaDTO): Promise<ITurista> {
    const nuevoTurista = new this.turistaModel(turistaDTO);
    return await nuevoTurista.save();
  }

  async actualizar(id: string, turistaActualizar: TuristaDTO): Promise<ITurista> {
    return await this.turistaModel.findByIdAndUpdate(id, turistaActualizar, { new: true }).exec();
  }

  async eliminar(id: string): Promise<any> {
    return await this.turistaModel.findByIdAndDelete(id).exec();
  }
}