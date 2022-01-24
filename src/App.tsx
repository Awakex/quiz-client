import React, {useEffect} from "react";
import {ToastContainer} from "react-toastify";
import {observer} from "mobx-react-lite";
import {useStores} from "./hooks/use-stores";
import UtilsWrapper from "./entries/wrappers/utils-wrapper/utils-wrapper";
import AppRoutes from "./entries/app-routes/app-routes";
import "./styles/app.sass";
import "./styles/custom.sass";

export const App = observer(() => {
    const {userStore} = useStores();

    useEffect(() => {
        userStore.loadUser();
    }, []);

    return (
        <div className="app">
            <UtilsWrapper />
            <AppRoutes />
            <ToastContainer position="bottom-left" />
        </div>
    );
});
