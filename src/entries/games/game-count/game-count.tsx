import React from "react";
import {Spinner} from "react-bootstrap";
import Block from "../../block/block";
import {ICountData} from "./game-count-container";
import {Operations} from "../../../enums/operations";
import Button from "../../button/button";
import styles from "./styles.module.sass";

interface IProps {
    countData: ICountData;
    isExampleLoading: boolean;
    handleExampleCheck: (number) => void;
}

const GameCount = ({countData, isExampleLoading, handleExampleCheck}: IProps) => {
    return (
        <div>
            {isExampleLoading ? (
                <div className="text-center d-flex align-items-center justify-content-center">
                    <Spinner animation="border" className="m-3" />
                    <h5 className="m-0">Загружаем для тебя пример</h5>
                </div>
            ) : (
                <>
                    {countData ? (
                        <div className={styles.countWrapper}>
                            <Block className={styles.questionBlock}>
                                {countData.example.a}
                                {countData.example.operation === Operations.PLUS
                                    ? "+"
                                    : countData.example.operation === Operations.MINUS
                                    ? "-"
                                    : countData.example.operation === Operations.DIVIDE
                                    ? "/"
                                    : countData.example.operation === Operations.MULTIPLY
                                    ? "*"
                                    : null}
                                {countData.example.b}= ?
                            </Block>
                            <Block className={styles.answers}>
                                {countData.answers.map((a, index) => (
                                    <Button
                                        key={index}
                                        color={"primary"}
                                        className={styles.button}
                                        onClick={() => handleExampleCheck(a)}
                                    >
                                        {a}
                                    </Button>
                                ))}
                            </Block>
                        </div>
                    ) : (
                        <h5>Мы не смогли создать для тебя пример :(</h5>
                    )}
                </>
            )}
        </div>
    );
};

export default GameCount;
