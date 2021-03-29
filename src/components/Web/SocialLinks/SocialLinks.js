import React from 'react';
import {ReactComponent as YoutTubeIcon} from '../../../assets/img/svg/youtube.svg'
import {ReactComponent as FacebookIcon} from '../../../assets/img/svg/facebook.svg'
import {ReactComponent as TwitterIcon} from '../../../assets/img/svg/twitter.svg'


import "./SocialLinks.scss";

export default function SocialLinks(){
   return(
       <div className="social-links">
           <a
            href="https://www.youtube.com/channel/UC_jT9C-vFc2g6vfjN3-NVKA"
            className="youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
              <YoutTubeIcon/>

           </a>

           <a
            href="https://twitter.com/BNichiboku"
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
              <TwitterIcon/>

           </a>

           <a
            href="https://www.facebook.com/Bunkan-Nichiboku-100622628547877"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
              <FacebookIcon/>

           </a>
       </div>
   )
}