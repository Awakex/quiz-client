import React from "react";
import {observer} from "mobx-react-lite";
import {useStores} from "../../hooks/use-stores";
import AuthModal from "../auth-modal/auth-modal";

const UtilsWrapper = observer(() => {
    const {userStore} = useStores();
    return <>{userStore.authModalIsOpen && <AuthModal />}</>;
});

export default UtilsWrapper;
