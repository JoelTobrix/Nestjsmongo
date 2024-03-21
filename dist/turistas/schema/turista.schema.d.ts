import * as mongoose from 'mongoose';
export declare const TuristaSchema: any;
export interface Turista extends mongoose.Document {
    id: string;
    nombre: string;
    apellidos: string;
    edad: number;
    nacionalidad: string;
    intereses: string;
}
export declare const TuristaModel: any;
