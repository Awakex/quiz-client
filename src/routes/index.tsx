import Dashboard from "../entries/dashboard/dashboard";
import AdminDashboard from "../entries/admin-dashboard/admin-dashboard";
import {Roles} from "../enums/roles";
import {IPageRoute} from "../interfaces/IPageRoute";

export const PUBLIC_ROUTES = {
    ROOT: "/",
};

export const PRIVATE_ROUTES = {
    ROOT: "/",
    ADMIN: {
        ROOT: "/admin",
    },
};

export const PublicPages: IPageRoute[] = [
    {id: 1, component: <div>Public router</div>, path: PUBLIC_ROUTES.ROOT},
];

export const PrivatePages: IPageRoute[] = [
    {id: 1, component: <Dashboard />, path: PRIVATE_ROUTES.ROOT},
    {id: 2, component: <AdminDashboard />, path: PRIVATE_ROUTES.ADMIN.ROOT, roles: [Roles.ADMIN]},
];
