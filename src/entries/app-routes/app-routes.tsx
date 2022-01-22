import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {useStores} from "../../hooks/use-stores";
import {PrivatePages, PUBLIC_ROUTES, PublicPages} from "../../routes";
import {observer} from "mobx-react-lite";
import Header from "../header/header";
import {hasAccess} from "../../core/hasAccess";

const AppRoutes = observer(() => {
    const {userStore} = useStores();
    return (
        <BrowserRouter>
            <Header />
            <div className="container content no-gutters">
                <Routes>
                    {userStore.isAuthenticated ? (
                        <>
                            {PrivatePages.map((page) => {
                                if (!page.roles) {
                                    return (
                                        <Route
                                            key={page.id}
                                            element={page.component}
                                            path={page.path}
                                        />
                                    );
                                }

                                return hasAccess(userStore.user.roles, page.roles) ? (
                                    <Route
                                        key={page.id}
                                        element={page.component}
                                        path={page.path}
                                    />
                                ) : (
                                    <Route
                                        key={page.id}
                                        path={page.path}
                                        element={<Navigate to={PUBLIC_ROUTES.ROOT} />}
                                    />
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {PublicPages.map((page) => (
                                <Route key={page.id} element={page.component} path={page.path} />
                            ))}
                        </>
                    )}
                </Routes>
            </div>
        </BrowserRouter>
    );
});

export default AppRoutes;
