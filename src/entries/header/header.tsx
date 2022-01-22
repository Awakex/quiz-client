import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Container, Nav} from "react-bootstrap";
import {APP_NAME} from "../../config";
import {observer} from "mobx-react-lite";
import {useStores} from "../../hooks/use-stores";
import {useNavigate} from "react-router-dom";
import {PRIVATE_ROUTES} from "../../routes";
import {Roles} from "../../enums/roles";

const Header = observer(() => {
    const {userStore} = useStores();
    let navigate = useNavigate();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>{APP_NAME}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {userStore.user?.roles?.includes(Roles.ADMIN) && (
                            <Nav.Link onClick={() => navigate(PRIVATE_ROUTES.ADMIN.ROOT)}>
                                Админка
                            </Nav.Link>
                        )}
                    </Nav>
                    <Nav>
                        {!userStore.isAuthenticated ? (
                            <Nav.Link onClick={() => (userStore.authModalIsOpen = true)}>
                                Вход
                            </Nav.Link>
                        ) : (
                            <Nav.Link onClick={() => userStore.logout()}>Выход</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default Header;
