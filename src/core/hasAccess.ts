import {Roles} from "../enums/roles";

export const hasAccess = (userRoles: Roles[], rolesForRoute) => {
    if (!userRoles.length) {
        return false;
    }

    return userRoles.some((role) => {
        return rolesForRoute.includes(role);
    });

    return false;
};
