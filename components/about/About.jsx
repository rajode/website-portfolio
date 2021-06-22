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
                <h3>I'm a 4th year Software Engineering student at the University of Calgary. I enjoy learning new technologies and applying them to 
                    my personal projects. I am currently looking for an internship position that will introduce me to experienced developers and 
                    grow my skill-set as a software developer.  </h3>

                    <h2>Here are the technologies I am proficient at: </h2>
           <div className="container">
                <ul>
                    <li className="active">Java</li>
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
