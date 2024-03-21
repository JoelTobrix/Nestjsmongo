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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TuristaDTO = void 0;
const class_validator_1 = require("class-validator");
class TuristaDTO {
}
exports.TuristaDTO = TuristaDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo ID es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El ID debe ser una cadena de caracteres' }),
    __metadata("design:type", String)
], TuristaDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo nombre es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de caracteres' }),
    __metadata("design:type", String)
], TuristaDTO.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo apellidos es requerido' }),
    (0, class_validator_1.IsString)({ message: 'Los apellidos deben ser una cadena de caracteres' }),
    __metadata("design:type", String)
], TuristaDTO.prototype, "apellidos", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo edad es requerido' }),
    (0, class_validator_1.IsNumber)({}, { message: 'La edad debe ser un número' }),
    __metadata("design:type", Number)
], TuristaDTO.prototype, "edad", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo nacionalidad es requerido' }),
    (0, class_validator_1.IsString)({ message: 'La nacionalidad debe ser una cadena de caracteres' }),
    __metadata("design:type", String)
], TuristaDTO.prototype, "nacionalidad", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo intereses es requerido' }),
    (0, class_validator_1.IsString)({ message: 'Los intereses deben ser una cadena de caracteres' }),
    __metadata("design:type", String)
], TuristaDTO.prototype, "intereses", void 0);
//# sourceMappingURL=turista.dto.js.map