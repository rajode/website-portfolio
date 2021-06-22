import "./intro.scss"
import {init} from 'ityped'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      //loop: false,
      strings: ["Software Engineer"],
      
    });
  }, []);

    return (
        <div className="intro" id="intro">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Ragya Mittal</h1>
                <h3><span ref={textRef}></span></h3>
                <div className="itemContainer">
                <a href="https://github.com/rajode" target="_blank"><GitHubIcon className="icon"/></a>
                <a href="https://ca.linkedin.com/in/ragya-mittal-578971181" target="_blank"> <LinkedInIcon className="icon" /> </a>
                
                </div>
                <div className="arrow">
                <a href="#about"><ExpandMoreIcon className="iconL" /></a>
                </div>
            </div>
            
            
           
        </div>
    )
}
