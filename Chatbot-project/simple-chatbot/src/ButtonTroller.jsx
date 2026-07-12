function ButtonTroller(){
        const[isButtonOn, setIsButtonOn] = React.useState(true);


        function Inverter(){
            setIsButtonOn(!isButtonOn);
        }

         return(
            <div className ={`switch ${isButtonOn} ? button-on : button-off`}>
                <button onClick = {Inverter}>
                   {isButtonOn ? 'ON' : 'OFF'}
                </button>
              </div>
         )
       }
       export default ButtonTroller