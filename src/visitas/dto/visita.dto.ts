import{ IsString, IsNumber, IsNotEmpty} from 'class-validator';
export class VisitaDTO {
    @IsNotEmpty({ message: 'El campo ID es requerido' })
    @IsString({ message: 'El ID_Visita debe tener caracteres' })
    ID_Visita: String;

    @IsNotEmpty({ message: 'El campo ID es requerido' })
    @IsString({ message: 'El ID_Ciudad debe tener caracteres' })
    ID_Ciudad: String;

    @IsNotEmpty({ message: 'El campo Fecha es requerido' })
    @IsString({ message: 'El dato debe tener una fecha de visita' })
    Fecha: Date;
}
