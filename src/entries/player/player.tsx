import React from "react";
import styles from "./styles.module.sass";

interface IProps {
    playerContent: any;
}

const Player = ({playerContent}: IProps) => {
    return <div className={styles.player}>{playerContent}</div>;
};

export default Player;
