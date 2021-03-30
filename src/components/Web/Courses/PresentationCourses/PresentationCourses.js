import React from "react";
import AcademyLogo from "../../../../assets/img/png/BUNKAN_NICHIBOKU-02.png";

import "./PresentationCourses.scss";

export default function PresentationCourses() {
  return (
    <div className="presentation-courses">
      <img src={AcademyLogo} alt="Cursos de Mario Garcia" />
      <p>
        En BUNKAN NICHIBOKU vas a encontrar los mejores cursos online de
        desarrollo Japonés -Español. Unete a nosotros y empieza tu camino como
        traductor. Sinceramente, estos curso es el
        tipo de contenido que a mi me hubiera gustado encontrar cuando empecé en
        el mundo del desarrollo profesional.
      </p>
      <p>¡¡¡Échales un vistazo y aprovecha las ofertas!!!</p>
    </div>
  );
}