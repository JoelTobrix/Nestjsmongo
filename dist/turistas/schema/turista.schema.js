"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuristaModel = exports.TuristaSchema = void 0;
const mongoose = require("mongoose");
exports.TuristaSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    edad: { type: Number, required: true },
    nacionalidad: { type: String, required: true },
    intereses: { type: String, required: true },
}, { timestamps: true });
exports.TuristaSchema.index({ id: 1 }, { unique: true });
exports.TuristaModel = mongoose.model('Turista', exports.TuristaSchema);
//# sourceMappingURL=turista.schema.js.map