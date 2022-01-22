import React, {useEffect, useState} from "react";
import Block from "../block/block";
import {Colors} from "../../enums/colors";
import {useStores} from "../../hooks/use-stores";

const HistoryBlock = () => {
    const [history, setHistory] = useState([]);
    const {userStore} = useStores();

    useEffect(() => {
        let socket = userStore.socket;
        if (!socket) {
            return;
        }

        socket.emit("get:history");
        socket.on("history", (history) => {
            setHistory(history);
        });
    }, [userStore.socket]);

    return <Block style={{boxShadow: `0 0 50px ${Colors.SKY}`}}>HISTORY</Block>;
};

export default HistoryBlock;
