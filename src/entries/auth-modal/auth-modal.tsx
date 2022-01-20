import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useStores} from "../../hooks/use-stores";

const AuthModal = observer((props) => {
    const {userStore} = useStores();
    const [isRegistrationMode, setIsRegistrationMode] = useState(false);
    const [authData, setAuthData] = useState<AuthDto>({
        password: "",
        username: "",
    });

    const handleRegistration = () => {
        userStore.registrationUser(authData);
    };

    const handleLogin = () => {
        userStore.loginUser(authData);
    };

    return (
        <>
            <Modal
                show={userStore.authModalIsOpen}
                onHide={() => (userStore.authModalIsOpen = false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{isRegistrationMode ? "Регистрация" : "Вход"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Логин</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Введите логин"
                                onChange={(e) =>
                                    setAuthData({...authData, username: e.target.value})
                                }
                                value={authData.username}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Введите пароль"
                                onChange={(e) =>
                                    setAuthData({...authData, password: e.target.value})
                                }
                                value={authData.password}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            active={!userStore.isLoading}
                            onClick={() =>
                                isRegistrationMode ? handleRegistration() : handleLogin()
                            }
                        >
                            {isRegistrationMode ? "Регистрация" : "Вход"}
                        </Button>

                        <hr />

                        {isRegistrationMode ? (
                            <p
                                className="text-center link-primary"
                                style={{cursor: "pointer"}}
                                onClick={() => setIsRegistrationMode(false)}
                            >
                                Вход
                            </p>
                        ) : (
                            <p
                                className="text-center link-primary"
                                style={{cursor: "pointer"}}
                                onClick={() => setIsRegistrationMode(true)}
                            >
                                Нет аккаунта? Регистрация
                            </p>
                        )}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
});

export default AuthModal;
