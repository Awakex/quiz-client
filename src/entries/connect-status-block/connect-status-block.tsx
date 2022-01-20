import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import Block from "../block/block";
import {useStores} from "../../hooks/use-stores";
import {Colors} from "../../enums/colors";

const ConnectStatusBlock = observer(() => {
    const [usersOnline, setUsersOnline] = useState(0);
    const {websocketStore} = useStores();

    useEffect(() => {
        if (websocketStore.socket) {
            websocketStore.socket.on("update:usersOnline", (online) => {
                setUsersOnline(online);
            });
        }
    }, [websocketStore.socket]);

    return (
        <Block style={{boxShadow: `0 0 20px ${websocketStore.isConnected ? Colors.GREEN : "red"}`}}>
            {websocketStore.isConnected ? (
                <p className={`text-center fw-bold m-0`} style={{color: Colors.GREEN}}>
                    Онлайн, {usersOnline} чел.
                </p>
            ) : (
                <p className={`text-center fw-bold m-0`} style={{color: Colors.RED}}>
                    Оффлайн
                </p>
            )}
        </Block>
    );
});

export default ConnectStatusBlock;
