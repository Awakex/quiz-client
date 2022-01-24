import React from "react";
import Block from "../block/block";
import styles from "./styles.module.sass";
import Button from "../button/button";
import {Route, Routes, useNavigate} from "react-router-dom";
import {PRIVATE_ROUTES} from "../../routes";
import Training from "../training/training";

const UserDashboard = () => {
    let navigate = useNavigate();
    return (
        <div className={styles.dashboard}>
            <h2 className={styles.title}>Доступные режимы</h2>
            <Block className={styles.modes}>
                <Button color={"primary"} onClick={() => navigate(PRIVATE_ROUTES.MODES.TRAINING)}>
                    Тренажер счета
                </Button>
            </Block>

            <Routes>
                <Route element={<Training />} path={PRIVATE_ROUTES.MODES.TRAINING} />
            </Routes>
        </div>
    );
};

export default UserDashboard;
