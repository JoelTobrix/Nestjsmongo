"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let VisitaService = class VisitaService {
    constructor(turistaModel) {
        this.turistaModel = turistaModel;
    }
};
exports.VisitaService = VisitaService;
exports.VisitaService = VisitaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Turista')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], VisitaService);
async;
todos();
Promise < visitas_interfaces_1.IVisita[] > {
    return: await this.VisitaModel.find().exec()
};
async;
uno(ID_Visita, string);
Promise < visitas_interfaces_1.IVisita > {
    return: await this.turistaModel.findById(id).exec()
};
async;
insertar(visitasDTO, visitasDTO);
Promise < ITurista > {
    const: nuevoaVisita = new this.visitaModel(visitaDTO),
    return: await nuevoTurista.save()
};
//# sourceMappingURL=visitas.service.js.map