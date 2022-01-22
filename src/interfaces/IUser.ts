import {Roles} from "../enums/roles";

export interface IUser {
    id: string;
    username: string;
    roles: Roles[];
}
