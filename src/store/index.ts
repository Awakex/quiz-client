import {createContext} from "react";
import {UserStore} from "./user-store";
import {WebsocketStore} from "./websocket-store";

export const rootStoreContext = createContext({
    userStore: new UserStore(),
    websocketStore: new WebsocketStore(),
});
