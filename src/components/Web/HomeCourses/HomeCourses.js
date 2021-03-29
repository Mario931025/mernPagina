import React from 'react';
import {Row,Col,Card,Button} from 'antd';
import {Link} from 'react-router-dom';
import N5 from '../../../assets/img/jpg/JLPT-N5.jpg';
import N4 from '../../../assets/img/jpg/n4.jpg';
import N3 from '../../../assets/img/jpg/N3.jpg';
import N2 from '../../../assets/img/jpg/n2.jpg';
import N1 from '../../../assets/img/jpg/n1.jpg';
import manga from '../../../assets/img/jpg/id-5vswpzqjpwe-youtube-automatic.jpg';

import './HomeCourses.scss'

export default function HomeCourses() {
    return (
      <Row className="home-courses">

          <Col lg={24} className="home-courses__title">
              <h2>Aprende y mejora tus habilidades</h2>
          </Col>

          <Col lg={4}/>
          <Col lg={16}>
              <Row className="row-courses">
                  <Col md={6}><CardCourse
                    image={N5}
                    title="EXAMEN JLPT N5"
                    subtitle="文法、聴解、漢字、読解"
                    link="https://bunkannichiboku.com/"
                  /></Col>
                  
                  <Col md={6}><CardCourse
                    image={N4}
                    title="EXAMEN JLPT N4"
                    subtitle="文法、聴解、漢字、読解"
                    link="https://bunkannichiboku.com/"
                  /></Col>

                  <Col md={6}><CardCourse
                    image={N3}
                    title="EXAMEN JLPT N3"
                    subtitle="文法、聴解、漢字、読解"
                    link="https://bunkannichiboku.com/"
                  /></Col>
               

                
                  <Col md={6}><CardCourse
                    image={N2}
                    title="EXAMEN JLPT N2"
                    subtitle="文法、聴解、漢字、読解"
                    link="https://bunkannichiboku.com/"
                  /></Col>
                </Row>

                <Row className="row-courses">
                 <Col md={6}><CardCourse
                    image={N1}
                    title="EXAMEN JLPT N1"
                    subtitle="文法、聴解、漢字、読解"
                    link="https://bunkannichiboku.com/"
                  /></Col>
                
                <Col md={6}/>
                <Col md={6}/>


                <Col md={6}><CardCourse
                    image={manga}
                    title="CREACION DE MANGA"
                    subtitle="マンガの作り方"
                    link="https://www.udemy.com/share/1023CyBEAfcV9RQ3g=/"
                  /></Col>

              </Row>

          </Col>
          <Col lg={4}/>
          <Col lg={24} className="home-courses__more">
              <Link to="/courses">
                  <Button>Ver más cursos...</Button>
              </Link>
          </Col>
      </Row>
    )
}


function CardCourse(props){
    const {image,title,subtitle,link} = props
    const {Meta} = Card;

    return(
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title}/>}
                actions={[<Button>Ver más...</Button>]}
            >
                <Meta title={title} description={subtitle}/>

            </Card>

        </a>
    )
}