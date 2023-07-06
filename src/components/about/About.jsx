import "./about.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
export default function About() {
    return (
        <div className="about" id = "about">


                <div className="arrowUp">
                    <a href="#intro"><ExpandLessIcon className="iconL" /></a>
                </div>
                <h1>About</h1>
                <h3>I'm a recent Software Engineering graduate from the University of Calgary. With a strong background in software development and a track record of delivering innovative solutions, 
                    I thrive in dynamic environments where collaboration and efficient coding drive success. From streamlining workflows to creating captivating applications, I'm driven by the opportunity to make a real impact through technology. 
                    Let's connect and discuss how I can contribute to your team's success. </h3>

                    <h2>Here are the technologies I am proficient at: </h2>
           <div className="container">
                <ul>
                    <li className="active">Java</li>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>Processing</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>SQlite</li>
                    <li>MySQL</li>
                </ul> 
           </div>
           <div className="arrowDown">
                <a href="#portfolio"><ExpandMoreIcon className="iconL" /></a>
            </div>
        </div>
    )
}
