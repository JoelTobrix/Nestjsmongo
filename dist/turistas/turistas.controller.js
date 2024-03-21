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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuristaController = void 0;
const common_1 = require("@nestjs/common");
const turistas_service_1 = require("./turistas.service");
const turista_dto_1 = require("./dto/turista.dto");
let TuristaController = class TuristaController {
    constructor(turistaService) {
        this.turistaService = turistaService;
    }
    insertar(turistaDTO) {
        return this.turistaService.insertar(turistaDTO);
    }
    todos() {
        return this.turistaService.todos();
    }
    uno(id) {
        return this.turistaService.uno(id);
    }
    actualizar(id, turistaDTO) {
        return this.turistaService.actualizar(id, turistaDTO);
    }
    eliminar(id) {
        return this.turistaService.eliminar(id);
    }
};
exports.TuristaController = TuristaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [turista_dto_1.TuristaDTO]),
    __metadata("design:returntype", void 0)
], TuristaController.prototype, "insertar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TuristaController.prototype, "todos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TuristaController.prototype, "uno", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, turista_dto_1.TuristaDTO]),
    __metadata("design:returntype", void 0)
], TuristaController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TuristaController.prototype, "eliminar", null);
exports.TuristaController = TuristaController = __decorate([
    (0, common_1.Controller)('api/v2/turista'),
    __metadata("design:paramtypes", [turistas_service_1.TuristaService])
], TuristaController);
//# sourceMappingURL=turistas.controller.js.map