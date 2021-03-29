import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona1 from "../../../assets/img/png/avatar1.png";
import AvatarPersona2 from "../../../assets/img/png/avatar2.png";
import AvatarPersona3 from "../../../assets/img/png/avatar3.png";
import AvatarPersona4 from "../../../assets/img/png/avatar4.png";



import "./ReviewCourses.scss";

export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>
            Forma parte de los +15 mil estudiantes que estan aprendiendo con mis
            cursos
          </h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Alonso Campos"
                subtitle="Alumno de BUNKAN"
                avatar={AvatarPersona1}
                review="Un curso excelente, el profesor explica detalladamente como funciona el idioma japonés buscado muchos cursos, pero ninguno me ha enseñado tanto como este, ahora estoy mejorando mi habilidad."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Vanessa Dominguez"
                subtitle="Alumno de BUNKAN"
                avatar={AvatarPersona2}
                review="Si te gustan los cursos que profundizan en la materia, te lo recomiendo. El profesor explica de forma completa todos los conceptos necesarios para trabajar con Kanji. Un gran curso."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Valentina Rubio"
                subtitle="Alumna de BUNKAN"
                avatar={AvatarPersona3}
                review="El contenido del curso es muy completo y de necesitar cualquier dato adicional el profesor está super pendiente para responderlo."
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Ana Pérez"
                subtitle="Alumno de BUNKAN"
                avatar={AvatarPersona4}
                review="Empecé el curso sin saber nada de React Native y creo que lo finalizo teniendo un nivel de conocimiento como para embarcarme en realizar mi primera conversación."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Jesús Cruz"
                subtitle="Alumno de BUNKAN"
                avatar={AvatarPersona1}
                review="Me ha parecido un buen curso, las explicaciones muy claras y lo que enseña me ha sido muy útil del trabajo que me habían encargado."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Maria Garcia"
                subtitle="Alumna de BUNKAN"
                avatar={AvatarPersona2}
                review="Aprendes todo lo que promete el video de inicio y te da la capacidad. Gracias Agus por crear este curso, tenes mucho talento para explicar y se nota que te encanta hacerlo."
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}