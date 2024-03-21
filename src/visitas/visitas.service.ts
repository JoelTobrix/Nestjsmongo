import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VisitaDTO } from './dto/visita.dto';
import { IVisita } from './Interfaces/visitas.interfaces';

@Injectable()
export class VisitaService {
  constructor(
    @InjectModel('Turista') private readonly turistaModel: Model<ITurista>
  ) {}}

  async todos(): Promise<IVisita[]> {
    return await this.VisitaModel.find().exec();
  }
  async uno(ID_Visita: string): Promise<IVisita> {
    return await this.turistaModel.findById(id).exec();
  }
  async insertar(visitasDTO: visitasDTO): Promise<IVisita> {
    const nuevoaVisita = new this.visitaModel(visitaDTO);
    return await nuevoTurista.save();
  }