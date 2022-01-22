import {makeAutoObservable} from "mobx";
import jwtDecode from "jwt-decode";
import {AuthAPI} from "../core/api/auth-api";
import {toast} from "react-toastify";
import {ErrorCodes} from "../core/error-codes";
import io, {Socket} from "socket.io-client";
import {WEBSOCKET_URL} from "../config";

export class UserStore {
    public user: IUser | null;
    public isLoading: boolean = false;
    public authModalIsOpen = false;
    public isAuthenticated: boolean = false;

    //socket
    public socket: Socket = null;
    public isSocketConnected: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    public loadUser = () => {
        let token = localStorage.getItem("token");
        if (!token) {
            this.isAuthenticated = false;
            return;
        }

        let decodedToken: IToken = jwtDecode(token);
        let {exp, id, roles, username} = decodedToken;

        if (Date.now() >= exp * 1000) {
            localStorage.removeItem("token");
            return;
        }

        this.user = {
            username,
            roles,
            id,
        };

        if (!this.isSocketConnected) {
            this.connectToWebsocket();
        }

        this.isAuthenticated = true;
        return this.user;
    };

    public registrationUser = (authDto: AuthDto) => {
        this.isLoading = true;
        AuthAPI.registration(authDto)
            .then((response) => {
                this.authModalIsOpen = false;
                localStorage.setItem("token", response.data.token);
                this.loadUser();
                toast.success("Успешная регистрация!");
            })
            .catch((e) => {
                toast.error(ErrorCodes[e.response.data.message]);
            })
            .finally(() => {
                this.isLoading = false;
            });
    };

    public loginUser = (authDto: AuthDto) => {
        this.isLoading = true;
        AuthAPI.login(authDto)
            .then((response) => {
                this.authModalIsOpen = false;
                localStorage.setItem("token", response.data.token);
                this.loadUser();
                toast.success("Успешный вход!");
            })
            .catch((e) => toast.error(ErrorCodes[e.response.data.message]))
            .finally(() => (this.isLoading = false));
    };

    public logout = () => {
        localStorage.removeItem("token");
        if (this.isSocketConnected) {
            this.socket.disconnect();
        }
        this.isAuthenticated = false;
    };

    public decodeToken = (token: string) => {
        return jwtDecode(token);
    };

    public connectToWebsocket = () => {
        this.socket = io(WEBSOCKET_URL, {
            query: {userId: this.user.id},
        });

        this.socket.on("connect", () => {
            this.isSocketConnected = true;
        });
        this.socket.on("disconnect", () => {
            this.isSocketConnected = false;
        });
    };
}
