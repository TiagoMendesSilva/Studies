import React from "react";
import ReactDOM from 'react-dom'
import './Footer.css';

const root = ReactDOM.createRoot(document.getElementById('my-footer'));

function Footer(){
    return(
        <div id='my-footer'>
     
        </div>
    )
  
}
  
function tick() {
  const element = (
    <div>
       <h3>It is {new Date().toLocaleTimeString()}.</h3>
    </div>
  );
  root.render(element);
}


 
setInterval(tick, 1000);

export default Footer;

