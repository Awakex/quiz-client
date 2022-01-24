import AdminDashboard from "../entries/admin-dashboard/admin-dashboard";
import {Roles} from "../enums/roles";
import {IPageRoute} from "../interfaces/IPageRoute";
import PlayerContainer from "../entries/player/player-container";
import UserDashboard from "../entries/user-dashboard/user-dashboard";

export const PUBLIC_ROUTES = {
    ROOT: "/",
};

export const PRIVATE_ROUTES = {
    ROOT: "/*",
    ADMIN: {
        ROOT: "/admin",
    },
    PLAYER: {
        ROOT: "/player",
    },
    MODES: {
        TRAINING: "/training",
    },
};

export const PublicPages: IPageRoute[] = [
    {id: 1, component: <div>Public router</div>, path: PUBLIC_ROUTES.ROOT},
];

export const PrivatePages: IPageRoute[] = [
    {id: 1, component: <UserDashboard />, path: PRIVATE_ROUTES.ROOT},
    {id: 2, component: <AdminDashboard />, path: PRIVATE_ROUTES.ADMIN.ROOT, roles: [Roles.ADMIN]},
    {id: 3, component: <PlayerContainer />, path: PRIVATE_ROUTES.PLAYER.ROOT},
];
