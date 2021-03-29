import React from "react";
import LogoWhite from "../../../../assets/img/png/bunkan2.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Mario Garcia" />
      <h4>
        Entra en el mundo de la traducción, disfruta interpretando y deja que tú imaginación fluya y crea verdaderas maravillas!!
      </h4>
      <SocialLink />
    </div>
  );
}