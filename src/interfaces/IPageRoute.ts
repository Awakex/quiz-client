import {Roles} from "../enums/roles";

export interface IPageRoute {
    id: number;
    component: any;
    path: string;
    roles?: Roles[];
}
