import React from 'react'
import {Row,Col,Card} from 'antd'
import {ClockCircleOutlined,MessageOutlined } from '@ant-design/icons'


import './HowMyCoursesWorks.scss'
import HomeCourses from '../HomeCourses'

export default function HowMMyCourseWorks() {
    return (
      <Row className="how-my-courses-work">
          <Col lg={24} className="how-my-courses-work__title">
              <h2>¿Como funciionan mis cursos?</h2>
            <h3>Cada curso cuenta con contenido personalizado
                a tu forma de trabajar, contactate con nosotros
                para pedir la disponibilidad de horarios.
            </h3>
          </Col>

        <Col lg={4}/>
        <Col lg={16}>
            <Row className="row-cards">
                <Col md={8}><CardInfo
               avatar={<ClockCircleOutlined/>}
               title="Cursos y clases"
               description="Revisa algunos de los cursos que damso especiales asi como
               el contacto para organizar tus clases a tu horario y a tu nivel
               "
                /></Col>
                 <Col md={8}><CardInfo
               avatar={ClockCircleOutlined}
               title="Acceso 24/7"
               description="Accede a los cursos en cualquier momento, desde cualquier lugar
               sin importar tu ciudad."
                /></Col>
                 <Col md={8}><CardInfo
               avatar={ClockCircleOutlined}
               title=" Práctico"
               description=" Siempre en constante contacto con tus profesores
               compañeros de clase, y practicando siempre el idioma en todo momento.
               "
                /></Col>
            </Row>

            <Row className="row-cards">
                <Col md={8}><CardInfo
               avatar={<ClockCircleOutlined/>}
               title="Mejora tu perfil"
               description="Aprende y mejora tu perfil para mantenerte informado de
               actualizaciones
               "
                /></Col>
                 <Col md={8}><CardInfo
               avatar={ClockCircleOutlined}
               title="Precios bajos"
               description="Obten la mejor educación en nuestra escuela a un precio accesible."
                /></Col>
                 <Col md={8}><CardInfo
               avatar={ClockCircleOutlined}
               title="certificaciones "
               description=" Busca la certificaicón Internacional desde
               0 hasta avanzado N1
               "
                /></Col>
            </Row>
            
        </Col>
        <Col lg={4}/>

      </Row>
    )
}


function CardInfo(props){

    const { title,subtitle,description,avatar} = props;
    const {Meta} = Card;

    return(
        <Card className="how-my-courses-work__card">
            
            <Meta title={title} subtitle={subtitle} description={description} />
        </Card>
    )
     }