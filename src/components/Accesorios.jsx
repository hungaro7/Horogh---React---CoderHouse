import portaLlaves from "../images/porta-llaves.jpg";
import riñonera from "../images/riñorera-maxin.jpg";

export const Accesorios = () => {
    return(
        <div className="container">
            <div className="column">
                <img src={portaLlaves} className="portaLlave" alt="llaves" width={"80%"} height={"40%"}/>
            </div>
            <div className="column">
                <img src={riñonera} className="riñonera" alt="riñonera" width={"80%"} height={"40%"}/>
            </div>
        </div>
    );
   
};