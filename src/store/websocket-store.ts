import {makeAutoObservable} from "mobx";
import io, {Socket} from "socket.io-client";
import {WEBSOCKET_URL} from "../config";

export class WebsocketStore {
    public socket: Socket = null;
    public isConnected: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    public connect = (userId: string) => {
        this.socket = io(WEBSOCKET_URL, {
            query: {userId},
        });

        this.socket.on("connect", () => (this.isConnected = true));
        this.socket.on("disconnect", () => (this.isConnected = false));
    };
}
