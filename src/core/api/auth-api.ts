import {Request} from "../request";

export const AuthAPI = {
    login: (authDto: AuthDto) => {
        return Request.post(`/auth/login`, authDto);
    },
    registration: (authDto: AuthDto) => {
        return Request.post(`/auth/registration`, authDto);
    },
};
