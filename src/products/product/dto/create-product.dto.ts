import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
    @IsNumber()
    readonly productDisplaySeq: number;

    @IsString()
    readonly productName: string;
}