import React, {useEffect} from "react";
import Header from "./entries/header/header";
import {ToastContainer} from "react-toastify";
import {observer} from "mobx-react-lite";
import {useStores} from "./hooks/use-stores";
import UtilsWrapper from "./entries/utils-wrapper/utils-wrapper";
import AppRoutes from "./entries/app-routes/app-routes";
import "./styles/app.sass";

export const App = observer(() => {
    const {userStore, websocketStore} = useStores();

    useEffect(() => {
        let user = userStore.loadUser();
        if (user) {
            websocketStore.connect(user.id);
        }

        return () => {
            websocketStore.socket?.disconnect();
        };
    }, []);

    useEffect(() => {
        if (userStore.user && !websocketStore.socket) {
            websocketStore.connect(userStore.user.id);
        }
    }, [userStore.user]);

    return (
        <div className="app">
            <Header />
            <UtilsWrapper />

            <div className="container content no-gutters">
                <AppRoutes />
            </div>

            <ToastContainer position="bottom-left" />
        </div>
    );
});
