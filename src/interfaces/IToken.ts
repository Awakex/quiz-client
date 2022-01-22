import {Roles} from "../enums/roles";

export interface IToken {
    exp: number;
    id: string;
    roles: Roles[];
    username: string;
}
