import {Operations} from "../../enums/operations";

export interface IGenerateExampleDto {
    min: number;
    max: number;
    operations: Operations[];
}
