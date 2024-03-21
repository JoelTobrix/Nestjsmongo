import * as mongoose from 'mongoose';
export declare const VisitaSchema: any;
export interface Visita extends mongoose.Document {
    ID_Visita: String;
    ID_Ciudad: String;
    Fecha: Date;
}
export declare const TuristaModel: any;
