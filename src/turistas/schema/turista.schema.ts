import * as mongoose from 'mongoose';

export const TuristaSchema = new mongoose.Schema({
  id: { type: String, required: true },
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  edad: { type: Number, required: true },
  nacionalidad: { type: String, required: true },
  intereses: { type: String, required: true },
}, { timestamps: true });

TuristaSchema.index({ id: 1 }, { unique: true });

export interface Turista extends mongoose.Document {
  id: string;
  nombre: string;
  apellidos: string;
  edad: number;
  nacionalidad: string;
  intereses: string;
}

export const TuristaModel = mongoose.model<Turista>('Turista', TuristaSchema);
