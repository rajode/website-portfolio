import { useState } from "react";
import "./contact.scss";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    var email = document.getElementById("emailField").value;
    var body = document.getElementById("bodyField").value;
    window.open("mailto:"+ email + "?body=" + body);
    setMessage(true);
  };
  return (

    <div className="contact" id="contact">
      
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input id="emailField" type="text" placeholder="rgmittal5@gmail.com" />
          <textarea id="bodyField" type="text" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        <div className="arrowUp">
                <a href="#portfolio"><ExpandLessIcon className="iconL" /></a>
      </div>
      </div>
    </div>
  );
}
