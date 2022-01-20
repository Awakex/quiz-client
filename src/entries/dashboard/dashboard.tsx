import React from "react";
import {Col, Row} from "react-bootstrap";
import Block from "../block/block";
import ConnectStatusBlock from "../connect-status-block/connect-status-block";

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard loaded</h2>
            <Row>
                <Col lg={10}>
                    <Block>HISTORY</Block>
                </Col>
                <Col lg={2}>
                    <ConnectStatusBlock />
                </Col>
            </Row>
            <Block>test content</Block>
        </div>
    );
};

export default Dashboard;
