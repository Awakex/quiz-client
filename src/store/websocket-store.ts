import {makeAutoObservable} from "mobx";
import io, {Socket} from "socket.io-client";
import {WEBSOCKET_URL} from "../config";

export class WebsocketStore {
    constructor() {
        makeAutoObservable(this);
    }
}
