import * as mongoose from 'mongoose';

export const VisitaSchema = new mongoose.Schema({
    ID_Visita:{type: String, required: true},
    ID_Ciudad:{type: String, required: true},
    Fecha: {type: Date, required: true},
}, { timestamps: true });
VisitaSchema.index({ ID_Visita: 1 }, { unique: true });

export interface Visita extends mongoose.Document {
    ID_Visita: String;
    ID_Ciudad: String;
    Fecha: Date;

}
export const TuristaModel = mongoose.model<Visita>('Turista', VisitaSchema);