import React from "react";
import styles from "./styles.module.sass";
import TrainingConstructor from "./training-constructor/training-constructor";

const Training = () => {
    return (
        <div className={styles.training}>
            <h4>Тренажеры</h4>
            <TrainingConstructor />
        </div>
    );
};

export default Training;
