"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuristaModel = exports.VisitaSchema = void 0;
const mongoose = require("mongoose");
exports.VisitaSchema = new mongoose.Schema({
    ID_Visita: { type: String, required: true },
    ID_Ciudad: { type: String, required: true },
    Fecha: { type: Date, required: true },
}, { timestamps: true });
exports.VisitaSchema.index({ ID_Visita: 1 }, { unique: true });
exports.TuristaModel = mongoose.model('Turista', exports.VisitaSchema);
//# sourceMappingURL=visita.schema.js.map