import React, {useEffect, useState} from "react";
import Player from "./player";
import {useLocation} from "react-router-dom";
import EmptyContent from "./scenes/empty-content/empty-content";
import {GameTypes} from "../../enums/game-types";
import GameCountContainer from "../games/game-count/game-count-container";

const PlayerContainer = () => {
    const {state} = useLocation();
    const [playerContent, setPlayerContent] = useState(null);

    useEffect(() => {
        initPlayer();
    }, []);

    const initPlayer = () => {
        if (!state) {
            setPlayerContent(<EmptyContent />);
            return;
        }

        // @ts-ignore
        if (state.mode === GameTypes.COUNT) {
            setPlayerContent(<GameCountContainer state={state} />);
        }
    };

    const handleCheckAnswer = () => {};

    return <Player playerContent={playerContent} />;
};

export default PlayerContainer;
