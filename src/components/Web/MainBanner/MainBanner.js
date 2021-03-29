import { Row,Col } from "antd";
import React from "react";

import './MainBanner.scss'

export default function MainBanner(){
    return (
        <div className="main-banner">
            <div className="main-banner__dark">
                <Row>
                    <Col lg={4}/>
                    <Col lg={16}>
                        <h2>Aprende  <br/> Japonés desde 0 <br/>
                        日本語初級-上級</h2>

                        <h3> A través de cursos prácticos,consicos y actualizados, creados por {""}
                        <br/>
                        profesionales con años de experiencia
                        </h3>
                    </Col>
                    <Col lg={4}/>
                </Row>
            </div>
        </div>
    )
}
