import Dashboard from "../entries/dashboard/dashboard";

export const PUBLIC_ROUTES = {
    ROOT: "/",
};

export const PRIVATE_ROUTES = {
    ROOT: "/",
};

export const PublicPages: IPageRoute[] = [
    {id: 1, component: <div>Public router</div>, path: PUBLIC_ROUTES.ROOT},
];

export const PrivatePages: IPageRoute[] = [
    {id: 1, component: <Dashboard />, path: PRIVATE_ROUTES.ROOT},
];
