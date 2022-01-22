import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import Block from "../block/block";
import {useStores} from "../../hooks/use-stores";
import {Colors} from "../../enums/colors";

const ConnectStatusBlock = observer(() => {
    const [usersOnline, setUsersOnline] = useState(0);
    const {userStore} = useStores();

    useEffect(() => {
        let socket = userStore.socket;
        if (socket) {
            socket.on("update:usersOnline", (online) => {
                setUsersOnline(online);
            });
        }
    }, [userStore.socket]);

    return (
        <Block
            style={{boxShadow: `0 0 20px ${userStore.isSocketConnected ? Colors.GREEN : "red"}`}}
        >
            {userStore.isSocketConnected ? (
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
