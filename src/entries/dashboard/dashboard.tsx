import React from "react";
import {Col, Row} from "react-bootstrap";
import ConnectStatusBlock from "../connect-status-block/connect-status-block";
import HistoryBlock from "../history-block/history-block";

const Dashboard = () => {
    return (
        <div style={{marginTop: 20}}>
            <Row>
                <Col lg={10}>
                    <HistoryBlock />
                </Col>
                <Col lg={2}>
                    <ConnectStatusBlock />
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
