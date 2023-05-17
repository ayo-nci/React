
import Alert from "./components/Alert";
import Button from "./components/Button";
import Alertbutton from "./components/Alertbutton";
import { useState } from 'react';

function App() {

  let buttonLabelArr = ["click me", "edit", "delete", "download", "update"];
  let colorArr = ["success","primary", "secondary"];
  let [colorIndex, setColorIndex] = useState(0);
  let [colorState, setColorState] = useState(`${colorArr[colorIndex]}`);
  let [alerting, setAlerting] = useState(false);

  return (<div>
    {alerting && <Alertbutton onClose={()=>setAlerting(false)}> Some alert </Alertbutton >}
   
    <Button 
      color = "success"
      children={buttonLabelArr[0]}  
      onClick={() => {
        console.log("Clicked");
        setAlerting(true);
     /*   
        if(colorIndex===0){
          setColorIndex(1)
        } else {
          setColorIndex(0)
        }
        setColorState(colorArr[colorIndex]);
      //  setAlert(alertColor)
      */
      }
      }
      />
    
  </div>)
}

export default App;