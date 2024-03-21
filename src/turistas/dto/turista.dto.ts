import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class TuristaDTO {
  @IsNotEmpty({ message: 'El campo ID es requerido' })
  @IsString({ message: 'El ID debe ser una cadena de caracteres' })
  id: string;

  @IsNotEmpty({ message: 'El campo nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  nombre: string;

  @IsNotEmpty({ message: 'El campo apellidos es requerido' })
  @IsString({ message: 'Los apellidos deben ser una cadena de caracteres' })
  apellidos: string;

  @IsNotEmpty({ message: 'El campo edad es requerido' })
  @IsNumber({}, { message: 'La edad debe ser un número' })
  edad: number;

  @IsNotEmpty({ message: 'El campo nacionalidad es requerido' })
  @IsString({ message: 'La nacionalidad debe ser una cadena de caracteres' })
  nacionalidad: string;

  @IsNotEmpty({ message: 'El campo intereses es requerido' })
  @IsString({ message: 'Los intereses deben ser una cadena de caracteres' })
  intereses: string;
}
