import React from "react";
import "./Main.css";

function Main(){
    return(
        
        <form>
            <label>
                Convert from:
            </label>
            <input type="text" name="name" />
            
            <label>
                For:
                <input type="text" name="name" />
            </label>
            <label>
                Value:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="to convert" />
        </form>
     
       
    );
}
 
export default Main;