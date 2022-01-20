import React from "react";
import {observer} from "mobx-react-lite";
import Block from "../block/block";
import {useStores} from "../../hooks/use-stores";

const ConnectStatusBlock = observer(() => {
    const {websocketStore} = useStores();

    return (
        <Block>
            {websocketStore.isConnected ? (
                <p className="text-center text-success fw-bold m-0">Онлайн</p>
            ) : (
                <p className="text-center text-danger fw-bold m-0">Оффлайн</p>
            )}
        </Block>
    );
});

export default ConnectStatusBlock;
