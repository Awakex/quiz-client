import {makeAutoObservable} from "mobx";
import jwtDecode from "jwt-decode";
import {AuthAPI} from "../core/api/auth-api";
import {toast} from "react-toastify";
import {ErrorCodes} from "../core/error-codes";

export class UserStore {
    public user: IUser | null;
    public isLoading: boolean = false;
    public isAuthenticated: boolean = false;

    public authModalIsOpen = false;

    constructor() {
        makeAutoObservable(this);
    }

    public loadUser = () => {
        let token = localStorage.getItem("token");
        if (!token) {
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

        this.isAuthenticated = true;

        return this.user;
    };

    public registrationUser = (authDto: AuthDto) => {
        this.isLoading = true;
        AuthAPI.registration(authDto)
            .then((response) => {
                this.isAuthenticated = true;
                this.authModalIsOpen = false;
                localStorage.setItem("token", response.data.token);
                toast.success("Успешная регистрация!");
            })
            .catch((e) => {
                toast.error(ErrorCodes[e.response.data.message]);
            })
            .finally(() => (this.isLoading = false));
    };

    public loginUser = (authDto: AuthDto) => {
        this.isLoading = true;
        AuthAPI.login(authDto)
            .then((response) => {
                this.isAuthenticated = true;
                this.authModalIsOpen = false;
                localStorage.setItem("token", response.data.token);
                toast.success("Успешный вход!");
            })
            .catch((e) => toast.error(ErrorCodes[e.response.data.message]))
            .finally(() => (this.isLoading = false));
    };

    public logout = () => {
        localStorage.removeItem("token");
        this.isAuthenticated = false;
    };

    public decodeToken = (token: string) => {
        return jwtDecode(token);
    };
}
