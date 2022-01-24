import React, {useEffect, useState} from "react";
import GameCount from "./game-count";
import {PlayerCountApi} from "../../../core/api/player-count-api";
import {toast} from "react-toastify";
import {ErrorCodes} from "../../../core/error-codes";
import {Operations} from "../../../enums/operations";

interface IProps {
    state: any;
}

export interface ICountData {
    answers: number[];
    example: {
        a: number;
        b: number;
        operation: Operations;
    };
}

const GameCountContainer = ({state}: IProps) => {
    const [isExampleLoading, setIsExampleLoading] = useState(false);
    const [countData, setCountData] = useState<ICountData>(null);

    useEffect(() => {
        generateExample();
    }, []);

    const generateExample = () => {
        setIsExampleLoading(true);
        PlayerCountApi.generateExample(state.values)
            .then((res) => {
                setCountData(res.data);
            })
            .catch((e) => toast.error(ErrorCodes[e.response.data.message]))
            .finally(() => setIsExampleLoading(false));
    };

    const handleExampleCheck = (answer) => {
        PlayerCountApi.checkExample({...countData, answer}).then((response) => {
            generateExample();
        });
    };

    return (
        <GameCount
            countData={countData}
            isExampleLoading={isExampleLoading}
            handleExampleCheck={handleExampleCheck}
        />
    );
};

export default GameCountContainer;
