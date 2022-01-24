import React from "react";
import ModalWrapper from "../../../wrappers/modal-wrapper/modal-wrapper";
import Button from "../../../button/button";
import {useNavigate} from "react-router-dom";
import {PRIVATE_ROUTES} from "../../../../routes";

const EmptyContent = () => {
    let navigate = useNavigate();

    return (
        <ModalWrapper position="absolute">
            <h3>Плеер не может быть запущен из за отсутствия данных, вернитесь к выбору режимов</h3>
            <Button color={"primary"} onClick={() => navigate(PRIVATE_ROUTES.ROOT)}>
                Вернуться
            </Button>
        </ModalWrapper>
    );
};

export default EmptyContent;
