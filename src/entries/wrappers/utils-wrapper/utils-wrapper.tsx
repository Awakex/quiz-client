import React from "react";
import {observer} from "mobx-react-lite";
import AuthModal from "../../auth-modal/auth-modal";

const UtilsWrapper = observer(() => {
    return (
        <>
            <AuthModal />
        </>
    );
});

export default UtilsWrapper;
