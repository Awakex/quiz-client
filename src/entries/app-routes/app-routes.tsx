import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useStores} from "../../hooks/use-stores";
import {PrivatePages, PublicPages} from "../../routes";
import {observer} from "mobx-react-lite";

const AppRoutes = observer(() => {
    const {userStore} = useStores();
    return (
        <BrowserRouter>
            <Routes>
                {userStore.isAuthenticated ? (
                    <>
                        {PrivatePages.map((page) => (
                            <Route key={page.id} element={page.component} path={page.path} />
                        ))}
                    </>
                ) : (
                    <>
                        {PublicPages.map((page) => (
                            <Route key={page.id} element={page.component} path={page.path} />
                        ))}
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
});

export default AppRoutes;
