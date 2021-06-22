
import "./portfolio.scss";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      
      <div className="arrowUp">
                <a href="#about"><ExpandLessIcon className="iconL" /></a>
      </div>
      
      <h1>My Projects</h1>
      
      <div className="container">

        <div className="item">
            <img src="assets/discord-bot.png" alt="" />
        <h3>Discord Bot</h3>
        </div>
      
        <div className="item">
            <a href="https://github.com/rajode/personalprojects/tree/main/toolshop" target="_blank">
              <img src="assets/toolshop.jpg" alt="" />
            </a>
        <h3>ToolShop App</h3>
        </div>

       

        <div className="item">
            <img src={'assets/courseregistration.png'} alt="" />
        <h3>Course Registration</h3>
        </div>

        <div className="item">
            <img src="assets/payment.jpg" alt="" />
        <h3>Payment App</h3>
        </div>

        <div className="item">
            <img src="assets/tictactoe.png" alt="" />
        <h3>Tic-Tac-Toe</h3>
        </div>
        
      </div>
      <div className="arrowDown">
                <a href="#contact"><ExpandMoreIcon className="iconL" /></a>
            </div>   
    </div>
  );
}
