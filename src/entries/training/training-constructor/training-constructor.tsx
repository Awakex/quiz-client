import React, {useState} from "react";
import Block from "../../block/block";
import styles from "./styles.module.sass";
import Button from "../../button/button";
import {Form} from "react-bootstrap";
import Select from "react-select";
import {Operations} from "../../../enums/operations";
import {useNavigate} from "react-router-dom";
import {PRIVATE_ROUTES} from "../../../routes";
import {GameTypes} from "../../../enums/game-types";

export interface ICountValues {
    min: number | string;
    max: number | string;
    operations: any[];
}

const TrainingConstructor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [trainingValues, setTrainingValues] = useState<ICountValues>({
        min: "",
        max: "",
        operations: [],
    });

    let navigate = useNavigate();

    const handleCreateClick = () => {
        navigate(PRIVATE_ROUTES.PLAYER.ROOT, {
            state: {values: trainingValues, mode: GameTypes.COUNT},
        });
    };

    return (
        <Block className={styles.container}>
            <div className={styles.toggleButton}>
                <Button color={"primary"} onClick={() => setIsOpen(!isOpen)}>
                    {`${isOpen ? "Закрыть" : "Открыть"}`} конструктор
                </Button>
            </div>

            {isOpen && (
                <div className={styles.formWrapper}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>От скольки</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите минимальное число"
                                pattern="[0-9]*"
                                value={trainingValues.min}
                                onChange={(e) =>
                                    e.target.validity.valid
                                        ? setTrainingValues({
                                              ...trainingValues,
                                              min: e.target.value,
                                          })
                                        : null
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>До скольки</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите максимальное число"
                                pattern="[0-9]*"
                                value={trainingValues.max}
                                onChange={(e) =>
                                    e.target.validity.valid
                                        ? setTrainingValues({
                                              ...trainingValues,
                                              max: e.target.value,
                                          })
                                        : null
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Операции</Form.Label>
                            <Select
                                options={[
                                    {value: Operations.PLUS, label: "Сложение"},
                                    {value: Operations.MINUS, label: "Вычитание"},
                                    {value: Operations.MULTIPLY, label: "Умножение"},
                                    {value: Operations.DIVIDE, label: "Деление"},
                                ]}
                                placeholder="Выберите операции"
                                isMulti
                                closeMenuOnSelect={false}
                                className={styles.select}
                                onChange={(e) =>
                                    setTrainingValues({
                                        ...trainingValues,
                                        operations: [...e].map((e) => e.value),
                                    })
                                }
                            />
                        </Form.Group>
                        <Button color={"primary"} onClick={handleCreateClick}>
                            Перейти к решению
                        </Button>
                    </Form>
                </div>
            )}
        </Block>
    );
};

export default TrainingConstructor;
