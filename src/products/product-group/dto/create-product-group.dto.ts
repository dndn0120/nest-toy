import { IsNumber, IsString } from 'class-validator';

export class CreateProducrGroupDto {
    @IsNumber()
    readonly productGroupSeq: number;

    @IsString()
    readonly productGroupDescription: string;
}
