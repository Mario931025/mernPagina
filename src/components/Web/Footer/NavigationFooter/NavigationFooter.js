  
import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import {BookOutlined,AlignRightOutlined,DatabaseOutlined,CodepenOutlined,HddOutlined,
    UserOutlined,AppstoreAddOutlined

} from'@ant-design/icons'

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
             <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
        <BookOutlined /> Cursos Libros -Online
        </a>
      </li>
      <li>
        <a href="#">
        <CodepenOutlined /> Aprendizaje integral
        </a>
      </li>
      <li>
        <a href="#">
          <DatabaseOutlined />  Libros
        </a>
      </li>
      <li>
        <a href="#">
        <AlignRightOutlined /> Politica de Privacidad
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
        <HddOutlined /> Sistemas / Servidores
        </a>
      </li>
      <li>
        <a href="#">
        <AppstoreAddOutlined /> CMS
        </a>
      </li>
      <li>
        <a href="#">
        <UserOutlined />Porfolio
        </a>
      </li>
      <li>
        <a href="#">
        <AlignRightOutlined />  Política de Cookies
        </a>
      </li>
    </ul>
  );
}

//si quiero que me lleve a un componente interno sera <Link to="/contact">***</Link>